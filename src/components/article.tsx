import { cn } from "@/utils/cn";
import type { ComponentProps } from "react";

const Article = ({ children }: ComponentProps<"article">) => {
  return (
    <article
      className={cn(
        "prose prose-zinc dark:prose-invert",
        "w-full max-w-full text-pretty",
      )}
    >
      {children}
    </article>
  );
};

export default Article;
