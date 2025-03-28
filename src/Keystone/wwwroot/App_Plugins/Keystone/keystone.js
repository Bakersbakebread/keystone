const a = [
  {
    name: "Keystone Entrypoint",
    alias: "Keystone.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint-DCmF4-ef.js")
  }
], t = [
  {
    name: "Keystone Dashboard",
    alias: "Keystone.Dashboard",
    type: "dashboard",
    js: () => import("./dashboard.element-5upalQm1.js"),
    meta: {
      label: "Example Dashboard",
      pathname: "example-dashboard"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Content"
      }
    ]
  }
], n = [
  ...a,
  ...t
];
export {
  n as manifests
};
//# sourceMappingURL=keystone.js.map
