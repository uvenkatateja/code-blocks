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
      <Container className="flex flex-col space-y-8 pt-6 pb-8 md:pt-8 md:pb-10">
        <div className="flex flex-col space-y-1 pt-2">
          <div className="flex w-full items-center justify-between">
            <h4 className="font-headings text-3xl font-semibold tracking-tight md:text-4xl">
              {data.title}
            </h4>
          </div>
          <p className="text-base text-neutral-600 md:text-lg dark:text-neutral-400">
            {data.description}
          </p>
          <div className="mt-2 flex w-full flex-col justify-between space-y-1 md:mt-0 md:flex-row md:items-center md:space-y-0">
            <ShowCategories categories={data.category} />
            <DocOptions
              content={data.content}
              folder={data.folder}
              file={`${document}.mdx`}
            />
          </div>
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
