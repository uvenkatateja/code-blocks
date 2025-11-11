import MDX from "@/mdx/mdx";
import { getDocument } from "@/utils/docs";
import { notFound } from "next/navigation";

const Home = () => {
  const document = getDocument("introduction");
  if (!document) return notFound();
  return <MDX code={document.mdx} />;
};

export default Home;
