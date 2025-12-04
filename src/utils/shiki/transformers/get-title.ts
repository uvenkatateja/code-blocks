import type { ShikiTransformer } from "shiki";

const getCodeBlockTitle = (): ShikiTransformer => {
  return {
    name: "GetCodeBlockTitle",
    pre(node) {
      const rawMeta = this.options.meta?.__raw;
      if (!rawMeta) return;
      const title = rawMeta.match(/title=(["'])(.*?)\1/)?.[2];
      node.properties["data-title"] = title;
    },
  };
};

export { getCodeBlockTitle };