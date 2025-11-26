"use client";

import { usePathname } from "next/navigation";

import { SidebarLinkItem } from "@/components/docs-layout/sidebarItem";
import { SidebarLinksData } from "@/components/docs-layout/sidebarLinksData";
import SidebarGroup from "@/components/docs-layout/sidebarGroup";

const SidebarLinks = () => {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col space-y-6">
      {SidebarLinksData.map((data) => (
        <SidebarGroup title={data.groupTitle} key={data.groupTitle}>
          {data.items.map((link) => (
            <SidebarLinkItem
              key={link.href}
              href={link.href}
              isActive={pathname === link.href}
            >
              <link.icon size={16} className="shrink-0" />
              <p className="truncate">{link.title}</p>
            </SidebarLinkItem>
          ))}
        </SidebarGroup>
      ))}
    </nav>
  );
};

export default SidebarLinks;
