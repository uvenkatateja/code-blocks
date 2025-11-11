import { MDXContent } from "@content-collections/mdx/react";
import { MDXCustomComponents } from "@/mdx/mdxComponents";

interface MDXProps {
  code: string;
}

const MDX = ({ code }: MDXProps) => {
  return <MDXContent code={code} components={MDXCustomComponents} />;
};

export default MDX;
