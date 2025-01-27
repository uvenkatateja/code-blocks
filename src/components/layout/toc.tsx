import { cn } from "@/utils/cn";
import React from "react";
import LayoutLink from "./links";

type ToC = {
  text?: string;
  slug?: string;
  level?: number;
};

interface ToCProps {
  tocData: ToC[];
}

const ToC = ({ tocData }: ToCProps) => {
  return (
    <aside
      className={cn(
        "fixed top-0 right-0",
        "h-full overflow-x-hidden overflow-y-auto",
        "w-60",
        "bg-neutral-100 dark:bg-neutral-900",
      )}
    >
      <section className="flex flex-col space-y-5 px-4 py-8">
        <div className="flex flex-col">
          <h2 className="mb-3 font-medium">On This Page</h2>
          {tocData.map((item) => (
            <LayoutLink key={item.slug} href={`#${item.slug}`}>
              {item.text}
            </LayoutLink>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default ToC;
