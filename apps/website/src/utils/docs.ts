import type { Document } from "@content-collections/core";
import { getTableOfContents, type ToCItem } from "@/mdx/plugins/generateToC";

import {
  allGenerals,
  allGstarteds,
  allShikis,
  allComponents,
  allShighs,
  type General,
  type Gstarted,
  type Shiki,
  type Shigh,
  type Component,
} from "content-collections";

const allDocsArray = [
  ...allGenerals,
  ...allGstarteds,
  ...allShikis,
  ...allShighs,
  ...allComponents,
];

type Doc = Document &
  (General | Gstarted | Shiki | Shigh | Component) & {
    tableOfContents: ToCItem[];
  };

interface GetDocument {
  folder: string;
  document: string;
}

const allDocs = allDocsArray.filter(
  (doc, index, self) =>
    index === self.findIndex((d) => d.folder === doc.folder && d._meta.path === doc._meta.path),
);

const getDocument = ({ folder, document }: GetDocument): Doc | undefined => {
  const doc = allDocs.find(
    (doc) => doc.folder === folder && doc._meta.path === document,
  );
  if (!doc) {
    return undefined;
  }
  const tableOfContents = getTableOfContents(doc.content);
  return { ...doc, tableOfContents };
};

const getDocsByCategory = () => {
  const grouped = allDocs.reduce(
    (acc, doc) => {
      const category = doc.category || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(doc);
      return acc;
    },
    {} as Record<string, typeof allDocs>,
  );

  return Object.entries(grouped).map(([category, docs]) => ({
    category,
    docs,
  }));
};

export { getDocument, getDocsByCategory };
