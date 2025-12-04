import type { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface ShowcaseProps {
  children: ReactNode;
}

const Showcase = ({ children }: ShowcaseProps) => {
  return (
    <div
      className={cn(
        "rounded-lg border border-dashed border-zinc-200 p-4 dark:border-zinc-800",
      )}
    >
      {children}
    </div>
  );
};

export default Showcase;
