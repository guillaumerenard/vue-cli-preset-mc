module.exports = (api, options, rootOptions) => {
  api.injectImports(api.entryFile, `import { router } from "@/router"`);
  api.injectRootOptions(api.entryFile, `router`);
  api.injectImports(api.entryFile, `import { store } from "@/store"`);
  api.injectRootOptions(api.entryFile, `store`);

  api.extendPackage({
    dependencies: {
      'msal': '^1.2.1',
      'vue-router': '^3.1.5',
      'vuex': '^3.1.2',
      'vuex-router-sync': '^5.0.0',
    },
  });

  api.render('./template', {
    ...options,
  });
}