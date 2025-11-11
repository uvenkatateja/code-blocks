import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";

import { reactToText } from "@/utils/react-to-text";
import { CodeBlock } from "@/components/code-block/code-block";
import { CodeBlockMDX } from "@/components/code-block/code-block-mdx";

const MDXCustomComponents: MDXComponents = {
  pre: ({ children, ...props }: ComponentProps<"pre">) => {
    const content = reactToText(children);
    return (
      <CodeBlock>
        <CodeBlockMDX {...props}>{children}</CodeBlockMDX>
      </CodeBlock>
    );
  },
};

export { MDXCustomComponents };
