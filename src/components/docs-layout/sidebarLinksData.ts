import { HighlighterIcon, HouseIcon, WrenchIcon, type LucideIcon } from "lucide-react";

interface Item {
  title: string;
  icon: LucideIcon;
  href: string;
}

interface SidebarLinks {
  groupTitle: string;
  items: Item[];
}

export const SidebarLinksData: SidebarLinks[] = [
  {
    groupTitle: "Getting Started",
    items: [
      {
        title: "Introduction",
        icon: HouseIcon,
        href: "/docs/getting-started/introduction",
      },
      {
        title: "Prerequisites",
        icon: WrenchIcon,
        href: "/docs/getting-started/prerequisites",
      },
    ],
  },
  {
    groupTitle: "Shiki",
    items: [
      {
        title: "Highlighter",
        icon: HighlighterIcon,
        href: "/docs/shiki/highlighter",
      },
      {
        title: "Prerequisites",
        icon: HouseIcon,
        href: "/prerequisites",
      },
    ],
  },
];
