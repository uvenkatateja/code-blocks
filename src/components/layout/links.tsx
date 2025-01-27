import type { LinkProps } from "next/link";
import { cn } from "@/utils/cn";
import Link from "next/link";
import type { ReactNode } from "react";

interface LayoutLinkProps extends LinkProps {
  children: ReactNode;
  activeLink?: boolean;
}

const LayoutLink = (props: LayoutLinkProps) => {
  return (
    <Link
      className={cn(
        "py-1.5 pl-4 font-mono text-sm tracking-tight",
        "border-l-2",
        props.activeLink
          ? "border-neutral-400 dark:text-neutral-50"
          : "border-neutral-200 text-neutral-600 hover:text-neutral-900 dark:border-neutral-800 dark:text-neutral-400",
      )}
      {...props}
    >
      {props.children}
    </Link>
  );
};

export default LayoutLink;
