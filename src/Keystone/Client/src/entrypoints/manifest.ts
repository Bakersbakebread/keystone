export const manifests: Array<UmbExtensionManifest> = [
  {
    name: "Keystone Entrypoint",
    alias: "Keystone.Entrypoint",
    type: "backofficeEntryPoint",
    js: () => import("./entrypoint"),
  }
];
