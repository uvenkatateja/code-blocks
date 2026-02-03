import type { Metadata } from "next";

import { globals } from "@/globals";
import { notFound } from "next/navigation";

import { cn } from "@/utils/cn";
import { getDocument } from "@/utils/docs";

import MDX from "@/components/mdx";
import Container from "@/components/container";
import Article from "@/components/docs/doc-article";

import DocOptions from "@/components/docs/doc-options";
import TableOfContents from "@/components/docs/toc-menu";
import ShowCategories from "@/components/docs/show-categories";

interface DocsPageProps {
  params: Promise<{ folder: string; slug: string[] }>;
}

export async function generateMetadata({
  params,
}: DocsPageProps): Promise<Metadata> {
  const { folder, slug } = await params;
  const document = slug.join("/");
  const websiteUrl = "https://code-blocks.pheralb.dev";
  const data = getDocument({
    folder,
    document,
  });
  return {
    title: `${data?.title} - ${globals.title}`,
    description: data?.description,
    openGraph: {
      type: "website",
      url: new URL(`/${slug}`, websiteUrl),
      title: `${data?.title} - ${globals.title}`,
      description: data?.description,
      siteName: websiteUrl,
      images: [
        {
          url: new URL(
            `/api/docs/og?document=${document}&folder=${folder}`,
            websiteUrl,
          ),
        },
      ],
    },
  };
}

const DocsPage = async ({ params }: DocsPageProps) => {
  const { folder, slug } = await params;
  const document = slug.join("/");
  const data = getDocument({
    folder,
    document,
  });
  if (!data) return notFound();
  return (
    <>
      <Container className="flex flex-col space-y-8 py-6 md:py-8">
        <div className="flex flex-col space-y-1 pt-2">
          <div className="flex w-full items-center justify-between">
            <h4 className="font-headings text-4xl font-semibold tracking-tight">
              {data.title}
            </h4>
            <DocOptions
              content={data.content}
              folder={data.folder}
              file={`${document}.mdx`}
            />
          </div>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            {data.description}
          </p>
          <ShowCategories className="mt-2" categories={data.category} />
        </div>
        <Article>
          <MDX code={data.mdx} />
        </Article>
      </Container>
      <aside
        className={cn("fixed top-16 right-8 h-full w-56", "hidden xl:block")}
      >
        <TableOfContents data={data.tableOfContents} />
      </aside>
    </>
  );
};

export default DocsPage;
