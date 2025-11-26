import type { ReactNode } from "react";

import SidebarHeader from "@/components/docs-layout/sidebarHeader";
import SidebarAppContent from "@/components/docs-layout/sidebarAppContent";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

interface DocsLayoutProps {
  children: ReactNode;
}

const DocsLayout = async ({ children }: DocsLayoutProps) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <SidebarAppContent />
      <SidebarInset>
        <SidebarHeader />
        <main>{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DocsLayout;
