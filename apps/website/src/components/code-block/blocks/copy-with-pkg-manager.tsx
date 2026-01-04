"use client";

import { usePkgManager, type PackageManager } from "@/stores/pkgManager";

import {
  CodeBlock,
  CodeBlockContent,
  CodeBlockHeader,
} from "@/components/code-block/code-block";
import { CopyButton } from "@/components/code-block/copy-button";
import { CodeblockShiki } from "@/components/code-block/client/shiki";

import SelectPkgManager from "@/components/code-block/blocks/select-pkg-manager";

interface CopyWithPkgManagerProps {
  command: string;
  title: string;
  type: "install" | "dlx";
}

interface Command {
  name: PackageManager;
  install: string;
  dlx: string;
}

const Commands: Command[] = [
  {
    name: "npm",
    install: "npm i",
    dlx: "npx",
  },
  {
    name: "pnpm",
    install: "pnpm i",
    dlx: "pnpm dlx",
  },
  {
    name: "yarn",
    install: "yarn add",
    dlx: "yarn dlx",
  },
  {
    name: "bun",
    install: "bun add",
    dlx: "bunx --bun",
  },
];

const CopyWithPkgManager = ({
  title,
  type,
  command,
}: CopyWithPkgManagerProps) => {
  const { packageManager } = usePkgManager();

  const selectedPkg =
    Commands.find((pkg) => pkg.name === packageManager) ?? Commands[0];
  const fullCommand = `${selectedPkg[type]} ${command}`;

  return (
    <CodeBlock>
      <CodeBlockHeader title={title} language="bash">
        <div className="flex items-center space-x-2 divide-x divide-neutral-300 dark:divide-neutral-700">
          <SelectPkgManager />
          <CopyButton className="pl-1" content={fullCommand} />
        </div>
      </CodeBlockHeader>
      <CodeBlockContent>
        <CodeblockShiki language="bash" code={fullCommand} />
      </CodeBlockContent>
    </CodeBlock>
  );
};

export default CopyWithPkgManager;
