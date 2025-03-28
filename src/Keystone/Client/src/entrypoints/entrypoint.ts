import {UmbEntryPointOnInit, UmbEntryPointOnUnload} from '@umbraco-cms/backoffice/extension-api';
import {UMB_AUTH_CONTEXT} from '@umbraco-cms/backoffice/auth';
import {client} from '../api';

import '../keystone';
import '../keystone/index.styles.css?inline'
import {ICommandMenu} from "../keystone";

// load up the manifests here
export const onInit: UmbEntryPointOnInit = (_host, _extensionRegistry) => {

  // create popover target
  const popoverTarget = document.createElement('div');
  popoverTarget.id = 'keystone-popover-target';
  // add popover attribute to target
  popoverTarget.setAttribute('popover', '');
  // create a style element
  const style = document.createElement('style');
  // add CSS rule for ::backdrop
  style.textContent = `
        #keystone-popover-target::backdrop {
            background-color: rgba(0, 0, 0, 0.5);
        }

        :popover-open {
            background: transparent;
            border: transparent;
            // width: 100%;
          }
    `;

  // append the style element to the document head
  _host.appendChild(style);
  _host.appendChild(popoverTarget);

  // create command menu
  const commandMenu = document.createElement('keystone-menu') as ICommandMenu;
  popoverTarget.appendChild(commandMenu);

  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'k') {
      e.preventDefault();
      // open popovertarget
      popoverTarget.togglePopover();
      popoverTarget.focus();
      commandMenu.focusInput();
    }
  });

  commandMenu.addEventListener('closePopover', () => {
    // close popover when close event is emitted from component
    popoverTarget.hidePopover();
  });

  window.addEventListener('openPopover', () => {
    console.log('open popover event received');
    popoverTarget.showPopover();
  });


  _extensionRegistry.register({
    type: 'headerApp',
    alias: 'keystone-header-icon',
    name: 'Keystone Menu ~ Header App Search',
    js: () => import('../header-app/header-icon.element.ts'),
    weight: 900,
    meta: {
      label: 'CommandMenuSearch',
      icon: 'commandmenusearch',
      pathname: 'commandmenusearch',
    },
  });


  console.log('Hello from my extension 🎉');
  // Will use only to add in Open API config with generated TS OpenAPI HTTPS Client
  // Do the OAuth token handshake stuff
  _host.consumeContext(UMB_AUTH_CONTEXT, async (authContext) => {

    console.log('Got auth context', authContext);
    // Get the token info from Umbraco
    const config = authContext.getOpenApiConfiguration();

    client.setConfig({
      baseUrl: config.base,
      credentials: config.credentials
    });

    // For every request being made, add the token to the headers
    // Can't use the setConfig approach above as its set only once and
    // tokens expire and get refreshed
    client.interceptors.request.use(async (request, _options) => {
      const token = await config.token();
      request.headers.set('Authorization', `Bearer ${token}`);
      return request;
    });

    // Create a global promise that resolves once a token is available.
    (window as any).__keystoneClientReady = (async () => {
      const token = await config.token();
      return token;
    })();
  });
};

export const onUnload: UmbEntryPointOnUnload = (_host, _extensionRegistry) => {
  console.log('Goodbye from my extension 👋');
};
