import { cn } from "@/utils/cn";
import { SidebarTrigger } from "../ui/sidebar";
import ThemeToggle from "../themeToggle";

const SidebarHeader = () => {
  return (
    <header
      className={cn(
        "px-3 py-2",
        "sticky top-0 flex w-full",
        "bg-zinc-50 backdrop-blur-sm dark:bg-zinc-900/90",
        "border-b border-zinc-200 dark:border-zinc-800",
      )}
    >
      <nav className="flex w-full items-center justify-between">
        <SidebarTrigger />
        <div className="flex items-center space-x-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default SidebarHeader;
