import { lazy } from "react";

export const Registry = [
  {
    registryName: "codeblock-mdx",
    sourceFile: "src/components/codeblock/mdx.tsx",
  },
  {
    registryName: "codeblock-client",
    sourceFile: "src/components/codeblock/client.tsx",
    reactComponent: lazy(() => import("@/components/examples/codeblockClient")),
  },
];
