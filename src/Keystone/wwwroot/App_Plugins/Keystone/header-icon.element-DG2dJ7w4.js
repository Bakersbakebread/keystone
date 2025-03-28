import { UmbTextStyles as m } from "@umbraco-cms/backoffice/style";
import { html as p, css as c, customElement as a } from "@umbraco-cms/backoffice/external/lit";
import { UmbLitElement as l } from "@umbraco-cms/backoffice/lit-element";
var b = Object.getOwnPropertyDescriptor, v = (r, n, i, u) => {
  for (var e = u > 1 ? void 0 : u ? b(n, i) : n, o = r.length - 1, s; o >= 0; o--)
    (s = r[o]) && (e = s(e) || e);
  return e;
};
let t = class extends l {
  emitOpenPopover() {
    window.dispatchEvent(new CustomEvent("openPopover", { bubbles: !0, composed: !0 }));
  }
  render() {
    return p`
      <uui-button @click=${this.emitOpenPopover} look="primary" label="search" compact>
        <uui-icon name="icon-list"></uui-icon>
      </uui-button>
    `;
  }
};
t.styles = [
  m,
  c`
      uui-button {
        font-size: 18px;
        --uui-button-background-color: transparent;
      }
    `
];
t = v([
  a("keystone-header-icon")
], t);
const E = t;
export {
  t as UmbSearchHeaderAppElement,
  E as default
};
//# sourceMappingURL=header-icon.element-DG2dJ7w4.js.map
