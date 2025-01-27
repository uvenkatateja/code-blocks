"use client";

import { allDocs } from "content-collections";
import { usePathname } from "next/navigation";
import LayoutLink from "./links";

const SidebarNav = () => {
  const pathname = usePathname();

  const normalizedDocs = allDocs.map((doc) => ({
    ...doc,
    url: doc.url.replace(/\/index$/, "/"),
  }));

  const docsByCategory = normalizedDocs.reduce(
    (acc, doc) => {
      if (!acc[doc.category]) {
        acc[doc.category] = [];
      }
      acc[doc.category].push(doc);
      return acc;
    },
    {} as Record<string, typeof normalizedDocs>,
  );

  return (
    <nav>
      {Object.entries(docsByCategory).map(([category, docs]) => (
        <div key={category} className="flex flex-col">
          <h2 className="mb-2 font-medium">{category}</h2>
          {docs.map((doc) => (
            <LayoutLink
              href={doc.url}
              key={doc.slug}
              activeLink={pathname === doc.url}
            >
              {doc.title}
            </LayoutLink>
          ))}
        </div>
      ))}
    </nav>
  );
};

export default SidebarNav;
