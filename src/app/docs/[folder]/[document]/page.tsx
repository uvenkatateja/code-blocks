import MDX from "@/mdx/mdx";
import Article from "@/components/article";
import Container from "@/components/container";
import { getDocument } from "@/utils/docs";
import { notFound } from "next/navigation";

interface DocsPageProps {
  params: Promise<{ folder: string; document: string }>;
}

const DocsPage = async ({ params }: DocsPageProps) => {
  const { folder, document } = await params;
  const data = getDocument({
    folder,
    document,
  });
  if (!data) return notFound();
  return (
    <Container>
      <Article>
        <MDX code={data.mdx} />
      </Article>
    </Container>
  );
};

export default DocsPage;
