var R = Object.defineProperty;
var A = (s, e, a) => e in s ? R(s, e, { enumerable: !0, configurable: !0, writable: !0, value: a }) : s[e] = a;
var g = (s, e, a) => A(s, typeof e != "symbol" ? e + "" : e, a);
var q = /\{[^{}]+\}/g, p = ({ allowReserved: s, name: e, value: a }) => {
  if (a == null) return "";
  if (typeof a == "object") throw new Error("Deeply-nested arrays/objects aren’t supported. Provide your own `querySerializer()` to handle these.");
  return `${e}=${s ? a : encodeURIComponent(a)}`;
}, U = (s) => {
  switch (s) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, _ = (s) => {
  switch (s) {
    case "form":
      return ",";
    case "pipeDelimited":
      return "|";
    case "spaceDelimited":
      return "%20";
    default:
      return ",";
  }
}, W = (s) => {
  switch (s) {
    case "label":
      return ".";
    case "matrix":
      return ";";
    case "simple":
      return ",";
    default:
      return "&";
  }
}, x = ({ allowReserved: s, explode: e, name: a, style: i, value: l }) => {
  if (!e) {
    let r = (s ? l : l.map((u) => encodeURIComponent(u))).join(_(i));
    switch (i) {
      case "label":
        return `.${r}`;
      case "matrix":
        return `;${a}=${r}`;
      case "simple":
        return r;
      default:
        return `${a}=${r}`;
    }
  }
  let n = U(i), t = l.map((r) => i === "label" || i === "simple" ? s ? r : encodeURIComponent(r) : p({ allowReserved: s, name: a, value: r })).join(n);
  return i === "label" || i === "matrix" ? n + t : t;
}, $ = ({ allowReserved: s, explode: e, name: a, style: i, value: l }) => {
  if (l instanceof Date) return `${a}=${l.toISOString()}`;
  if (i !== "deepObject" && !e) {
    let r = [];
    Object.entries(l).forEach(([m, c]) => {
      r = [...r, m, s ? c : encodeURIComponent(c)];
    });
    let u = r.join(",");
    switch (i) {
      case "form":
        return `${a}=${u}`;
      case "label":
        return `.${u}`;
      case "matrix":
        return `;${a}=${u}`;
      default:
        return u;
    }
  }
  let n = W(i), t = Object.entries(l).map(([r, u]) => p({ allowReserved: s, name: i === "deepObject" ? `${a}[${r}]` : r, value: u })).join(n);
  return i === "label" || i === "matrix" ? n + t : t;
}, E = ({ path: s, url: e }) => {
  let a = e, i = e.match(q);
  if (i) for (let l of i) {
    let n = !1, t = l.substring(1, l.length - 1), r = "simple";
    t.endsWith("*") && (n = !0, t = t.substring(0, t.length - 1)), t.startsWith(".") ? (t = t.substring(1), r = "label") : t.startsWith(";") && (t = t.substring(1), r = "matrix");
    let u = s[t];
    if (u == null) continue;
    if (Array.isArray(u)) {
      a = a.replace(l, x({ explode: n, name: t, style: r, value: u }));
      continue;
    }
    if (typeof u == "object") {
      a = a.replace(l, $({ explode: n, name: t, style: r, value: u }));
      continue;
    }
    if (r === "matrix") {
      a = a.replace(l, `;${p({ name: t, value: u })}`);
      continue;
    }
    let m = encodeURIComponent(r === "label" ? `.${u}` : u);
    a = a.replace(l, m);
  }
  return a;
}, O = ({ allowReserved: s, array: e, object: a } = {}) => (i) => {
  let l = [];
  if (i && typeof i == "object") for (let n in i) {
    let t = i[n];
    if (t != null) {
      if (Array.isArray(t)) {
        l = [...l, x({ allowReserved: s, explode: !0, name: n, style: "form", value: t, ...e })];
        continue;
      }
      if (typeof t == "object") {
        l = [...l, $({ allowReserved: s, explode: !0, name: n, style: "deepObject", value: t, ...a })];
        continue;
      }
      l = [...l, p({ allowReserved: s, name: n, value: t })];
    }
  }
  return l.join("&");
}, z = (s) => {
  if (!s) return;
  let e = s.split(";")[0].trim();
  if (e.startsWith("application/json") || e.endsWith("+json")) return "json";
  if (e === "multipart/form-data") return "formData";
  if (["application/", "audio/", "image/", "video/"].some((a) => e.startsWith(a))) return "blob";
  if (e.startsWith("text/")) return "text";
}, I = ({ baseUrl: s, path: e, query: a, querySerializer: i, url: l }) => {
  let n = l.startsWith("/") ? l : `/${l}`, t = s + n;
  e && (t = E({ path: e, url: t }));
  let r = a ? i(a) : "";
  return r.startsWith("?") && (r = r.substring(1)), r && (t += `?${r}`), t;
}, j = (s, e) => {
  var i;
  let a = { ...s, ...e };
  return (i = a.baseUrl) != null && i.endsWith("/") && (a.baseUrl = a.baseUrl.substring(0, a.baseUrl.length - 1)), a.headers = S(s.headers, e.headers), a;
}, S = (...s) => {
  let e = new Headers();
  for (let a of s) {
    if (!a || typeof a != "object") continue;
    let i = a instanceof Headers ? a.entries() : Object.entries(a);
    for (let [l, n] of i) if (n === null) e.delete(l);
    else if (Array.isArray(n)) for (let t of n) e.append(l, t);
    else n !== void 0 && e.set(l, typeof n == "object" ? JSON.stringify(n) : n);
  }
  return e;
}, v = class {
  constructor() {
    g(this, "_fns");
    this._fns = [];
  }
  clear() {
    this._fns = [];
  }
  exists(s) {
    return this._fns.indexOf(s) !== -1;
  }
  eject(s) {
    let e = this._fns.indexOf(s);
    e !== -1 && (this._fns = [...this._fns.slice(0, e), ...this._fns.slice(e + 1)]);
  }
  use(s) {
    this._fns = [...this._fns, s];
  }
}, D = () => ({ error: new v(), request: new v(), response: new v() }), N = { bodySerializer: (s) => JSON.stringify(s) }, k = O({ allowReserved: !1, array: { explode: !0, style: "form" }, object: { explode: !0, style: "deepObject" } }), P = { "Content-Type": "application/json" }, T = (s = {}) => ({ ...N, baseUrl: "", fetch: globalThis.fetch, headers: P, parseAs: "auto", querySerializer: k, ...s }), H = (s = {}) => {
  let e = j(T(), s), a = () => ({ ...e }), i = (t) => (e = j(e, t), a()), l = D(), n = async (t) => {
    let r = { ...e, ...t, headers: S(e.headers, t.headers) };
    r.body && r.bodySerializer && (r.body = r.bodySerializer(r.body)), r.body || r.headers.delete("Content-Type");
    let u = I({ baseUrl: r.baseUrl ?? "", path: r.path, query: r.query, querySerializer: typeof r.querySerializer == "function" ? r.querySerializer : O(r.querySerializer), url: r.url }), m = { redirect: "follow", ...r }, c = new Request(u, m);
    for (let f of l.request._fns) c = await f(c, r);
    let C = r.fetch, o = await C(c);
    for (let f of l.response._fns) o = await f(o, c, r);
    let y = { request: c, response: o };
    if (o.ok) {
      if (o.status === 204 || o.headers.get("Content-Length") === "0") return { data: {}, ...y };
      if (r.parseAs === "stream") return { data: o.body, ...y };
      let f = (r.parseAs === "auto" ? z(o.headers.get("Content-Type")) : r.parseAs) ?? "json", w = await o[f]();
      return f === "json" && r.responseTransformer && (w = await r.responseTransformer(w)), { data: w, ...y };
    }
    let b = await o.text();
    try {
      b = JSON.parse(b);
    } catch {
    }
    let h = b;
    for (let f of l.error._fns) h = await f(b, o, c, r);
    if (h = h || {}, r.throwOnError) throw h;
    return { error: h, ...y };
  };
  return { connect: (t) => n({ ...t, method: "CONNECT" }), delete: (t) => n({ ...t, method: "DELETE" }), get: (t) => n({ ...t, method: "GET" }), getConfig: a, head: (t) => n({ ...t, method: "HEAD" }), interceptors: l, options: (t) => n({ ...t, method: "OPTIONS" }), patch: (t) => n({ ...t, method: "PATCH" }), post: (t) => n({ ...t, method: "POST" }), put: (t) => n({ ...t, method: "PUT" }), request: n, setConfig: i, trace: (t) => n({ ...t, method: "TRACE" }) };
};
const d = H(T());
class M {
  static getCommands(e) {
    return ((e == null ? void 0 : e.client) ?? d).get({
      ...e,
      url: "/umbraco/keystone/api/v1/commands"
    });
  }
  static executeCommand(e) {
    return ((e == null ? void 0 : e.client) ?? d).post({
      ...e,
      url: "/umbraco/keystone/api/v1/execute"
    });
  }
  static ping(e) {
    return ((e == null ? void 0 : e.client) ?? d).get({
      ...e,
      url: "/umbraco/keystone/api/v1/ping"
    });
  }
  static whatsMyName(e) {
    return ((e == null ? void 0 : e.client) ?? d).get({
      ...e,
      url: "/umbraco/keystone/api/v1/whatsMyName"
    });
  }
  static whatsTheTimeMrWolf(e) {
    return ((e == null ? void 0 : e.client) ?? d).get({
      ...e,
      url: "/umbraco/keystone/api/v1/whatsTheTimeMrWolf"
    });
  }
  static whoAmI(e) {
    return ((e == null ? void 0 : e.client) ?? d).get({
      ...e,
      url: "/umbraco/keystone/api/v1/whoAmI"
    });
  }
}
export {
  M as K,
  d as c
};
//# sourceMappingURL=services.gen-DB0dPB4f.js.map
