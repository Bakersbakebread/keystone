import { UMB_AUTH_CONTEXT as V } from "@umbraco-cms/backoffice/auth";
import { K as X, c as O } from "./services.gen-DB0dPB4f.js";
import { UmbElementMixin as J } from "@umbraco-cms/backoffice/element-api";
import { LitElement as Q, html as S, unsafeCSS as Y, property as D, customElement as ee } from "@umbraco-cms/backoffice/external/lit";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const b = globalThis, H = b.trustedTypes, R = H ? H.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, G = "$lit$", $ = `lit$${Math.random().toFixed(9).slice(2)}$`, Z = "?" + $, te = `<${Z}>`, _ = document, T = () => _.createComment(""), w = (s) => s === null || typeof s != "object" && typeof s != "function", U = Array.isArray, ie = (s) => U(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == "function", L = `[ 	
\f\r]`, x = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, j = /-->/g, B = />/g, g = RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), K = /'/g, W = /"/g, q = /^(?:script|style|textarea|title)$/i, A = Symbol.for("lit-noChange"), d = Symbol.for("lit-nothing"), z = /* @__PURE__ */ new WeakMap(), f = _.createTreeWalker(_, 129);
function F(s, e) {
  if (!U(s) || !s.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return R !== void 0 ? R.createHTML(e) : e;
}
const ne = (s, e) => {
  const t = s.length - 1, n = [];
  let i, o = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", r = x;
  for (let c = 0; c < t; c++) {
    const a = s[c];
    let h, p, l = -1, u = 0;
    for (; u < a.length && (r.lastIndex = u, p = r.exec(a), p !== null); ) u = r.lastIndex, r === x ? p[1] === "!--" ? r = j : p[1] !== void 0 ? r = B : p[2] !== void 0 ? (q.test(p[2]) && (i = RegExp("</" + p[2], "g")), r = g) : p[3] !== void 0 && (r = g) : r === g ? p[0] === ">" ? (r = i ?? x, l = -1) : p[1] === void 0 ? l = -2 : (l = r.lastIndex - p[2].length, h = p[1], r = p[3] === void 0 ? g : p[3] === '"' ? W : K) : r === W || r === K ? r = g : r === j || r === B ? r = x : (r = g, i = void 0);
    const m = r === g && s[c + 1].startsWith("/>") ? " " : "";
    o += r === x ? a + te : l >= 0 ? (n.push(h), a.slice(0, l) + G + a.slice(l) + $ + m) : a + $ + (l === -2 ? c : m);
  }
  return [F(s, o + (s[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class k {
  constructor({ strings: e, _$litType$: t }, n) {
    let i;
    this.parts = [];
    let o = 0, r = 0;
    const c = e.length - 1, a = this.parts, [h, p] = ne(e, t);
    if (this.el = k.createElement(h, n), f.currentNode = this.el.content, t === 2 || t === 3) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (i = f.nextNode()) !== null && a.length < c; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const l of i.getAttributeNames()) if (l.endsWith(G)) {
          const u = p[r++], m = i.getAttribute(l).split($), C = /([.?@])?(.*)/.exec(u);
          a.push({ type: 1, index: o, name: C[2], strings: m, ctor: C[1] === "." ? oe : C[1] === "?" ? re : C[1] === "@" ? ae : E }), i.removeAttribute(l);
        } else l.startsWith($) && (a.push({ type: 6, index: o }), i.removeAttribute(l));
        if (q.test(i.tagName)) {
          const l = i.textContent.split($), u = l.length - 1;
          if (u > 0) {
            i.textContent = H ? H.emptyScript : "";
            for (let m = 0; m < u; m++) i.append(l[m], T()), f.nextNode(), a.push({ type: 2, index: ++o });
            i.append(l[u], T());
          }
        }
      } else if (i.nodeType === 8) if (i.data === Z) a.push({ type: 2, index: o });
      else {
        let l = -1;
        for (; (l = i.data.indexOf($, l + 1)) !== -1; ) a.push({ type: 7, index: o }), l += $.length - 1;
      }
      o++;
    }
  }
  static createElement(e, t) {
    const n = _.createElement("template");
    return n.innerHTML = e, n;
  }
}
function v(s, e, t = s, n) {
  var r, c;
  if (e === A) return e;
  let i = n !== void 0 ? (r = t._$Co) == null ? void 0 : r[n] : t._$Cl;
  const o = w(e) ? void 0 : e._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== o && ((c = i == null ? void 0 : i._$AO) == null || c.call(i, !1), o === void 0 ? i = void 0 : (i = new o(s), i._$AT(s, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = i : t._$Cl = i), i !== void 0 && (e = v(s, i._$AS(s, e.values), i, n)), e;
}
class se {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: n } = this._$AD, i = ((e == null ? void 0 : e.creationScope) ?? _).importNode(t, !0);
    f.currentNode = i;
    let o = f.nextNode(), r = 0, c = 0, a = n[0];
    for (; a !== void 0; ) {
      if (r === a.index) {
        let h;
        a.type === 2 ? h = new N(o, o.nextSibling, this, e) : a.type === 1 ? h = new a.ctor(o, a.name, a.strings, this, e) : a.type === 6 && (h = new le(o, this, e)), this._$AV.push(h), a = n[++c];
      }
      r !== (a == null ? void 0 : a.index) && (o = f.nextNode(), r++);
    }
    return f.currentNode = _, i;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class N {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, i) {
    this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = v(this, e, t), w(e) ? e === d || e == null || e === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : e !== this._$AH && e !== A && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : ie(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== d && w(this._$AH) ? this._$AA.nextSibling.data = e : this.T(_.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var o;
    const { values: t, _$litType$: n } = e, i = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = k.createElement(F(n.h, n.h[0]), this.options)), n);
    if (((o = this._$AH) == null ? void 0 : o._$AD) === i) this._$AH.p(t);
    else {
      const r = new se(i, this), c = r.u(this.options);
      r.p(t), this.T(c), this._$AH = r;
    }
  }
  _$AC(e) {
    let t = z.get(e.strings);
    return t === void 0 && z.set(e.strings, t = new k(e)), t;
  }
  k(e) {
    U(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, i = 0;
    for (const o of e) i === t.length ? t.push(n = new N(this.O(T()), this.O(T()), this, this.options)) : n = t[i], n._$AI(o), i++;
    i < t.length && (this._$AR(n && n._$AB.nextSibling, i), t.length = i);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const i = e.nextSibling;
      e.remove(), e = i;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class E {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, i, o) {
    this.type = 1, this._$AH = d, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = o, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = d;
  }
  _$AI(e, t = this, n, i) {
    const o = this.strings;
    let r = !1;
    if (o === void 0) e = v(this, e, t, 0), r = !w(e) || e !== this._$AH && e !== A, r && (this._$AH = e);
    else {
      const c = e;
      let a, h;
      for (e = o[0], a = 0; a < o.length - 1; a++) h = v(this, c[n + a], t, a), h === A && (h = this._$AH[a]), r || (r = !w(h) || h !== this._$AH[a]), h === d ? e = d : e !== d && (e += (h ?? "") + o[a + 1]), this._$AH[a] = h;
    }
    r && !i && this.j(e);
  }
  j(e) {
    e === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class oe extends E {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === d ? void 0 : e;
  }
}
class re extends E {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== d);
  }
}
class ae extends E {
  constructor(e, t, n, i, o) {
    super(e, t, n, i, o), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = v(this, e, t, 0) ?? d) === A) return;
    const n = this._$AH, i = e === d && n !== d || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, o = e !== d && (n === d || i);
    i && this.element.removeEventListener(this.name, this, n), o && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class le {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    v(this, e);
  }
}
const I = b.litHtmlPolyfillSupport;
I == null || I(k, N), (b.litHtmlVersions ?? (b.litHtmlVersions = [])).push("3.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce = { CHILD: 2 }, he = (s) => (...e) => ({ _$litDirective$: s, values: e });
class de {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, n) {
    this._$Ct = e, this._$AM = t, this._$Ci = n;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class P extends de {
  constructor(e) {
    if (super(e), this.it = d, e.type !== ce.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
  }
  render(e) {
    if (e === d || e == null) return this._t = void 0, this.it = e;
    if (e === A) return e;
    if (typeof e != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
    if (e === this.it) return this._t;
    this.it = e;
    const t = [e];
    return t.raw = t, this._t = { _$litType$: this.constructor.resultType, strings: t, values: [] };
  }
}
P.directiveName = "unsafeHTML", P.resultType = 1;
const pe = he(P), ue = ":host{display:block;padding:16px;color:var(--umb-grey-800);border-radius:1rem;width:50lvw}ul{margin:0;padding:0}.outer-container{display:flex;align-items:center;justify-content:center;padding:.5rem;min-width:50lvw}.card{background-color:#fff;margin:auto;overflow:hidden;transition:all .2s ease;transform:none;width:100%;border-radius:.75rem}.card>*+*{border-top:1px solid #f3f4f6}.input-container{position:relative;display:flex;align-items:center;height:4rem}.search-icon{pointer-events:none;width:1.25rem;height:1.25rem;padding:1rem}.search-input{width:100%;height:100%;background:transparent;border:none;outline:none;gap:2rem;font-size:1rem}.search-input::placeholder{color:#9ca3af}.options-list{overflow-y:auto;scroll-padding-top:.75rem;scroll-padding-bottom:.75rem}.section-group{display:inline}.section-header{padding:0 2rem}.link-item{display:flex;transition:all .2s ease;cursor:default;-webkit-user-select:none;user-select:none;border-radius:.75rem;padding:.75rem 2rem}.link-item:hover{color:#1b264f;background-color:#f9fafb}.link-item a{display:flex;text-decoration:none;color:inherit}.link-icon-container{display:flex;align-items:center;justify-content:center;flex:none}.link-icon{width:1.25rem;height:1.25rem}.link-text-container{flex:1;margin-left:1rem}.link-text{font-size:.875rem;margin:0}h1{margin:0;color:var(--umb-grey-800)}";
var me = Object.defineProperty, $e = Object.getOwnPropertyDescriptor, M = (s, e, t, n) => {
  for (var i = n > 1 ? void 0 : n ? $e(e, t) : e, o = s.length - 1, r; o >= 0; o--)
    (r = s[o]) && (i = (n ? r(e, t, i) : r(i)) || i);
  return n && i && me(e, t, i), i;
};
let y = class extends J(Q) {
  constructor() {
    super(...arguments), this.name = "KeystoneMenu", this.links = [], this.search = "";
  }
  async connectedCallback() {
    super.connectedCallback(), this.consumeContext(V, async (s) => {
      const e = s.getOpenApiConfiguration();
      let t = await e.token();
      for (; !t; )
        await new Promise((o) => setTimeout(o, 100)), t = await e.token();
      const { data: n, error: i } = await X.getCommands();
      if (i) {
        console.error(i);
        return;
      }
      this.links = n, console.log("dataResponse", n);
    });
  }
  // Getter that filters sections and command items based on the search query.
  get filteredLinks() {
    if (!this.search) return this.links;
    const s = this.search.toLowerCase();
    return this.links.map((e) => {
      const t = e.commandItems.filter((n) => {
        const i = document.createElement("div");
        return i.innerHTML = n.label, (i.textContent || "").toLowerCase().includes(s);
      });
      return { ...e, commandItems: t };
    }).filter((e) => e.commandItems.length > 0);
  }
  logSomething() {
    console.log("something");
  }
  handleSearch() {
    this.logSomething();
  }
  emitCloseEvent() {
    this.dispatchEvent(new CustomEvent("closePopover"));
  }
  // Update the search property when the user types.
  handleSearching(s) {
    const e = s.target;
    this.search = e.value;
  }
  // Handle keydown events on the search input.
  // When the user presses "ArrowDown", focus the first link item.
  handleKeyDown(s) {
    var e;
    if (s.key === "ArrowDown") {
      s.preventDefault();
      const t = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".link-item a");
      t && t.focus();
    }
  }
  focusInput() {
    var e;
    const s = (e = this.shadowRoot) == null ? void 0 : e.getElementById("keystone-search");
    s == null || s.focus();
  }
  render() {
    return S`
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
            ${this.filteredLinks ? this.filteredLinks.map(
      (s) => S`
                  <li class="section-group">
                    <div class="section-header">
                      <h3>${s.header}</h3>
                    </div>
                    <ul>
                      ${s.commandItems.map(
        (e) => S`
                          <li class="link-item" role="option" tabindex="-1">
                            <a
                              @click="${this.emitCloseEvent}"
                              href="${e.link}"
                            >
                              <div class="link-icon-container">
                                <uui-icon
                                  class="link-icon"
                                  name="${e.icon}"
                                  role="img"
                                  aria-label="arrow-forward-outline"
                                ></uui-icon>
                              </div>
                              <div class="link-text-container">
                                <p class="link-text">${pe(e.label)}</p>
                              </div>
                            </a>
                          </li>
                        `
      )}
                    </ul>
                  </li>
                `
    ) : null}
          </ul>
        </div>
      </div>
    `;
  }
};
y.styles = [Y(ue)];
M([
  D({ type: String })
], y.prototype, "name", 2);
M([
  D()
], y.prototype, "links", 2);
M([
  D()
], y.prototype, "search", 2);
y = M([
  ee("keystone-menu")
], y);
const ve = (s, e) => {
  const t = document.createElement("div");
  t.id = "keystone-popover-target", t.setAttribute("popover", "");
  const n = document.createElement("style");
  n.textContent = `
        #keystone-popover-target::backdrop {
            background-color: rgba(0, 0, 0, 0.5);
        }

        :popover-open {
            background: transparent;
            border: transparent;
            // width: 100%;
          }
    `, s.appendChild(n), s.appendChild(t);
  const i = document.createElement("keystone-menu");
  t.appendChild(i), window.addEventListener("keydown", (o) => {
    o.ctrlKey && o.key === "k" && (o.preventDefault(), t.togglePopover(), t.focus(), i.focusInput());
  }), i.addEventListener("closePopover", () => {
    t.hidePopover();
  }), window.addEventListener("openPopover", () => {
    console.log("open popover event received"), t.showPopover();
  }), e.register({
    type: "headerApp",
    alias: "keystone-header-icon",
    name: "Keystone Menu ~ Header App Search",
    js: () => import("./header-icon.element-DG2dJ7w4.js"),
    weight: 900,
    meta: {
      label: "CommandMenuSearch",
      icon: "commandmenusearch",
      pathname: "commandmenusearch"
    }
  }), console.log("Hello from my extension 🎉"), s.consumeContext(V, async (o) => {
    console.log("Got auth context", o);
    const r = o.getOpenApiConfiguration();
    O.setConfig({
      baseUrl: r.base,
      credentials: r.credentials
    }), O.interceptors.request.use(async (c, a) => {
      const h = await r.token();
      return c.headers.set("Authorization", `Bearer ${h}`), c;
    }), window.__keystoneClientReady = (async () => await r.token())();
  });
}, ye = (s, e) => {
  console.log("Goodbye from my extension 👋");
};
export {
  ve as onInit,
  ye as onUnload
};
//# sourceMappingURL=entrypoint-DCmF4-ef.js.map
