import type { MDXComponents } from "mdx/types";

import CodeblockMDX from "@/components/codeblock/mdx";
import { ComponentPreview, ComponentSource } from "@/components/sourcePreview";
import Hero from "@/components/hero";

export const MDXCustomComponents: MDXComponents = {
  pre: (props) => <CodeblockMDX {...props} />,
  code: (props) => <code className="font-mono text-sm" {...props} />,
  Hero,
  ComponentPreview,
  ComponentSource,
};
