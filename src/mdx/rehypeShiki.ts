import type { RehypeShikiCoreOptions } from "@shikijs/rehype/core";

// Shiki custom transformers
import { getShikiLanguage, wordWrapContent } from "@/utils/shiki-transformers";

const rehypeShikiOptions: RehypeShikiCoreOptions = {
  themes: {
    light: "one-light",
    dark: "one-dark-pro",
  },
  transformers: [getShikiLanguage, wordWrapContent],
};

export { rehypeShikiOptions };
