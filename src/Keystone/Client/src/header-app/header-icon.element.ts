import { UmbTextStyles } from '@umbraco-cms/backoffice/style';
import type { CSSResultGroup } from '@umbraco-cms/backoffice/external/lit';
import { css, html, customElement } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';

@customElement('keystone-header-icon')
export class UmbSearchHeaderAppElement extends UmbLitElement {

  emitOpenPopover(){
    window.dispatchEvent(new CustomEvent('openPopover', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <uui-button @click=${this.emitOpenPopover} look="primary" label="search" compact>
        <uui-icon name="icon-list"></uui-icon>
      </uui-button>
    `;
  }

  static styles: CSSResultGroup = [
    UmbTextStyles,
    css`
      uui-button {
        font-size: 18px;
        --uui-button-background-color: transparent;
      }
    `,
  ];
}

export default UmbSearchHeaderAppElement;

declare global {
  interface HTMLElementTagNameMap {
    'keystone-search-app': UmbSearchHeaderAppElement;
  }
}
