import type { ComponentProps, ReactNode } from "react";
import type { RegistryComponent } from "@/components/registry/types";

import { cn } from "@/utils/cn";

interface ShowSourceProps extends ComponentProps<"div"> {
  component: RegistryComponent["title"];
  children?: ReactNode;
}

const ShowSource = ({ className, children, ...props }: ShowSourceProps) => {
  return children;
};

export default ShowSource;
