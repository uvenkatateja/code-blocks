import { cn } from "@/utils/cn";
import type { ComponentProps } from "react";

const Article = ({ children }: ComponentProps<"article">) => {
  return (
    <article
      className={cn(
        "prose prose-neutral dark:prose-invert",
        "prose-h2:font-headings",
        "w-full max-w-full text-pretty",
      )}
    >
      {children}
    </article>
  );
};

export default Article;
