import Link from "next/link";

import { cn } from "@/utils/cn";
import { ExternalLink } from "@/components/ui/externalLink";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

import SidebarLinks from "@/components/docs-layout/sidebarLinks";

const SidebarAppContent = () => {
  return (
    <Sidebar>
      <SidebarContent>
        <nav className="flex flex-col space-y-6 py-6">
          <div className="flex flex-col gap-px px-5">
            <div className="flex items-center text-zinc-600 dark:text-zinc-400">
              <ExternalLink
                href="https://pheralb.dev"
                className={cn(
                  "transition-colors hover:text-zinc-950 dark:hover:text-zinc-200",
                )}
              >
                pheralb
              </ExternalLink>
            </div>
            <Link
              href="/"
              className={cn(
                "text-2xl font-semibold tracking-tight transition-colors",
                "hover:text-zinc-700 dark:hover:text-zinc-300",
              )}
            >
              Code Blocks
            </Link>
          </div>
          <SidebarLinks />
        </nav>
      </SidebarContent>
    </Sidebar>
  );
};

export default SidebarAppContent;
