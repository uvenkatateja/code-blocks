import { cn } from "@/utils/cn";
import type { ComponentProps } from "react";

const Article = ({ children }: ComponentProps<"article">) => {
  return <article className={cn("markdown")}>{children}</article>;
};

export default Article;
