import { UmbElementMixin } from "@umbraco-cms/backoffice/element-api";
import { LitElement, html, customElement, property, unsafeCSS } from "@umbraco-cms/backoffice/external/lit";
import { CommandItemsDto, type GetCommandsResponse, KeystoneService } from "../api";
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

// @ts-ignore
import styles from './index.styles.css?inline';
import { UMB_AUTH_CONTEXT } from "@umbraco-cms/backoffice/auth";

export interface ICommandMenu extends HTMLElement {
  focusInput(): void;
}

@customElement('keystone-menu')
export class CommandMenu extends UmbElementMixin(LitElement) {
  static styles = [unsafeCSS(styles)];

  @property({ type: String }) name = 'KeystoneMenu';

  @property() links: Array<CommandItemsDto> = [];

  // Holds the search query.
  @property() search = '';

  async connectedCallback() {
    super.connectedCallback();
    this.consumeContext(UMB_AUTH_CONTEXT, async (authContext) => {
      const config = authContext.getOpenApiConfiguration();

      // Poll until a valid token is returned.
      let token = await config.token();
      while (!token) {
        await new Promise(resolve => setTimeout(resolve, 100));
        token = await config.token();
      }

      // Now that the token is available, make the API call.
      const { data, error } = await KeystoneService.getCommands();
      if (error) {
        console.error(error);
        return;
      }

      this.links = data as GetCommandsResponse;
      console.log('dataResponse', data);
    });
  }

  // Getter that filters sections and command items based on the search query.
  get filteredLinks(): Array<CommandItemsDto> {
    if (!this.search) return this.links;
    const searchLower = this.search.toLowerCase();

    return this.links
      .map(section => {
        // Filter each section’s command items by comparing the plain text label.
        const filteredItems = section.commandItems.filter(item => {
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = item.label;
          const textLabel = tempDiv.textContent || "";
          return textLabel.toLowerCase().includes(searchLower);
        });
        return { ...section, commandItems: filteredItems };
      })
      .filter(section => section.commandItems.length > 0);
  }

  logSomething() {
    console.log('something');
  }

  handleSearch() {
    this.logSomething();
  }

  emitCloseEvent() {
    this.dispatchEvent(new CustomEvent('closePopover'));
  }

  // Update the search property when the user types.
  handleSearching(e: Event) {
    const target = e.target as HTMLInputElement;
    this.search = target.value;
  }

  // Handle keydown events on the search input.
  // When the user presses "ArrowDown", focus the first link item.
  handleKeyDown(e: KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const firstLink = this.shadowRoot?.querySelector(".link-item a") as HTMLElement;
      if (firstLink) {
        firstLink.focus();
      }
    }
  }

  public focusInput() {
    const inputEl = this.shadowRoot?.getElementById("keystone-search") as HTMLInputElement;
    inputEl?.focus();
  }

  render() {
    return html`
      <div class="outer-container">
        <div class="card">
          <div class="input-container">
            <uui-icon
              class="search-icon"
              name="icon-search"
              role="img"
              aria-label="search outline"
            ></uui-icon>
            <input
              @input="${this.handleSearching}"
              @keydown="${this.handleKeyDown}"
              id="keystone-search"
              type="text"
              class="search-input"
              placeholder="What do you need?"
              role="combobox"
              aria-expanded="false"
              aria-controls="options"
            />
          </div>
          <ul class="options-list" id="options" role="listbox">
            ${this.filteredLinks
              ? this.filteredLinks.map(
                section => html`
                  <li class="section-group">
                    <div class="section-header">
                      <h3>${section.header}</h3>
                    </div>
                    <ul>
                      ${section.commandItems.map(
                        item => html`
                          <li class="link-item" role="option" tabindex="-1">
                            <a
                              @click="${this.emitCloseEvent}"
                              href="${item.link}"
                            >
                              <div class="link-icon-container">
                                <uui-icon
                                  class="link-icon"
                                  name="${item.icon}"
                                  role="img"
                                  aria-label="arrow-forward-outline"
                                ></uui-icon>
                              </div>
                              <div class="link-text-container">
                                <p class="link-text">${unsafeHTML(item.label)}</p>
                              </div>
                            </a>
                          </li>
                        `
                      )}
                    </ul>
                  </li>
                `
              )
              : null}
          </ul>
        </div>
      </div>
    `;
  }
}

export default CommandMenu;
