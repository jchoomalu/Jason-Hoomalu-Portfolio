var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.js
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_types = require("@stackbit/types");
var import_cms_git = require("@stackbit/cms-git");
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.6.0",
  contentSources: [
    new import_cms_git.GitContentSource({
      rootPath: "/Users/jasonhoomalu/Documents/Jason-Hoomau-Portfolio",
      contentDirs: ["/client"],
      models: [
        // ...
      ],
      assetsConfig: {
        referenceType: "static",
        staticDir: "client/public",
        uploadDir: "images",
        publicPath: "/"
      }
    })
  ]
});
//# sourceMappingURL=stackbit.config.L4VM6OA2.cjs.map
