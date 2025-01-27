import { cn } from "@/utils/cn";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Logo, XTwitter, Github } from "../ui/icons";
import ExternalLink from "../ui/externalLink";

import { ArrowUpRight } from "lucide-react";
import ChangeTheme from "../changeTheme";
import SidebarNav from "./sidebarNav";

const Sidebar = () => {
  return (
    <aside
      className={cn(
        "fixed top-0 left-0",
        "h-full overflow-x-hidden overflow-y-auto",
        "w-60",
        "border-r border-dashed border-neutral-200 dark:border-neutral-800",
        "bg-neutral-100 dark:bg-neutral-950/20",
      )}
    >
      <section className="flex flex-col space-y-5 px-4 py-6">
        <Link
          href="/"
          className={buttonVariants({
            variant: "ghost",
            size: "icon",
            className: "p-6",
          })}
        >
          <Logo width={40} height={40} aria-label="Codeblocks" />
        </Link>
        <div className="flex flex-col space-y-1.5">
          <ChangeTheme />
          <ExternalLink
            title="Github Repository"
            href="https://github.com/pheralb/codeblocks"
            className={buttonVariants({
              variant: "outline",
              className:
                "flex w-full items-center justify-between px-3 shadow-none",
            })}
          >
            <div className="flex items-center space-x-3">
              <Github width={15} height={15} />
              <span>View on Github</span>
            </div>
            <ArrowUpRight
              size={14}
              className="text-neutral-400 dark:text-neutral-500"
            />
          </ExternalLink>
          <ExternalLink
            title="X (Twitter)"
            href="https://twitter.com/pheralb_"
            className={buttonVariants({
              variant: "outline",
              className:
                "flex w-full items-center justify-between px-3 shadow-none",
            })}
          >
            <div className="flex items-center space-x-3">
              <XTwitter width={14} height={14} />
              <span>X (Twitter)</span>
            </div>
            <ArrowUpRight
              size={14}
              className="text-neutral-400 dark:text-neutral-500"
            />
          </ExternalLink>
        </div>
        <div className="h-px bg-neutral-200 dark:bg-neutral-800" />
        <SidebarNav />
      </section>
    </aside>
  );
};

export default Sidebar;
