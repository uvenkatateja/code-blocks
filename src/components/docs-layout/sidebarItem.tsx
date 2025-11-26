import type { ReactNode } from "react";

import { cn } from "@/utils/cn";
import Link, { type LinkProps } from "next/link";

interface SidebarLinkItemProps extends LinkProps {
  isActive?: boolean;
  children: ReactNode;
}

const SidebarItemStyle = cn(
  "flex items-center space-x-2.5 px-1 py-1.5 text-sm",
);

const SidebarLinkItem = ({ isActive, ...props }: SidebarLinkItemProps) => {
  return (
    <Link
      href={props.href}
      className={cn(
        "flex items-center space-x-2.5 rounded-md px-2 py-1.5 text-sm",
        "text-zinc-600 dark:text-zinc-400",
        "hover:bg-zinc-200/40 dark:hover:bg-zinc-800/40",
        "hover:text-zinc-950 dark:hover:text-zinc-50",
        isActive &&
          "bg-zinc-200/60 font-medium text-zinc-950 dark:bg-zinc-800/60 dark:text-zinc-50",
      )}
    >
      {props.children}
    </Link>
  );
};

export { SidebarItemStyle, SidebarLinkItem };
