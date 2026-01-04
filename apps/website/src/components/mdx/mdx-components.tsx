import type { MDXComponents } from "mdx/types";

import DocCard from "@/components/docs/doc-card";
import Showcase from "@/components/docs/showcase";
import ShowProps from "@/components/docs/show-props";
import ShowSource from "@/components/docs/show-source";
import ComponentPreview from "@/components/docs/component-preview";
import MDXHighlightTabs from "@/components/docs/mdx-highlight-tabs";
import CopyShadcnCommand from "@/components/docs/copy-shadcn-command";
import CopyWithPkgManager from "@/components/code-block/blocks/copy-with-pkg-manager";

// MDX Components:
import { TabsContent } from "@/components/ui/tabs";
import { AMDXComponent } from "@/components/mdx/a-component";
import { PreShikiComponent } from "@/components/code-block/mdx/pre-shiki";

// Homepage:
import Hero from "@/components/hero";
import Features from "@/components/features";

// From Registry:
import { CopyButton } from "@/components/code-block/copy-button";

const MDXCustomComponents: MDXComponents = {
  // <a>:
  ...AMDXComponent,
  // <pre> Shiki:
  ...PreShikiComponent,
  // MDX CodeBlock Source Tabs:
  MDXHighlightTabs,
  TabsContent,
  // Blocks:
  CopyWithPkgManager,
  CopyShadcnCommand,
  DocCard,
  ShowProps,
  ShowSource,
  Showcase,
  CopyButton,
  ComponentPreview,
  Hero,
  Features,
};

export { MDXCustomComponents };
