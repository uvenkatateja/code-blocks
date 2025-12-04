import type { ShikiTransformer } from "shiki";

const getShikiLanguage = (): ShikiTransformer => {
  return {
    name: "GetShikiLanguage",
    pre(node) {
      node.properties["data-language"] = this.options.lang || "plaintext";
    },
  };
};

export { getShikiLanguage };