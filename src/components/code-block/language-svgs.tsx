import type { FC, SVGProps } from "react";
import type { Languages } from "@/utils/shiki";
import { BracketsSky, Exe, Markdown, Reactts, TypeScript } from "@react-symbols/icons";

interface LanguageSvgsType {
  title: string;
  language: Languages;
  icon: FC<SVGProps<SVGSVGElement>>;
}

export const LanguageSvgs: LanguageSvgsType[] = [
  {
    title: "React",
    language: "tsx",
    icon: Reactts,
  },
  {
    title: "TypeScript",
    language: "ts",
    icon: TypeScript,
  },
  {
    title: "Bash",
    language: "bash",
    icon: Exe,
  },
  {
    title: "CSS",
    language: "css",
    icon: BracketsSky,
  },
  {
    title: "Markdown",
    language: "mdx",
    icon: Markdown,
  },
];
