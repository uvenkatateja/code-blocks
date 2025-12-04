import type { JSX, SVGProps } from "react";
import type { Languages } from "@/utils/shiki";

import { ReactIcon } from "@/components/ui/svgs/react";
import { TypeScriptIcon } from "@/components/ui/svgs/typescript";
import { BashIcon } from "@/components/ui/svgs/bash";
import { CSSIcon } from "@/components/ui/svgs/css";

interface LanguageSvgsType {
  title: string;
  language: Languages;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export const LanguageSvgs: LanguageSvgsType[] = [
  {
    title: "React",
    language: "tsx",
    icon: ReactIcon,
  },
  {
    title: "TypeScript",
    language: "ts",
    icon: TypeScriptIcon,
  },
  {
    title: "Bash",
    language: "bash",
    icon: BashIcon,
  },
  {
    title: "CSS",
    language: "css",
    icon: CSSIcon,
  },
];
