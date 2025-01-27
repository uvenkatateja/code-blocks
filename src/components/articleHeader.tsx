import type { Doc } from "content-collections";

interface ArticleHeaderProps {
  data: Doc;
}

const ArticleHeader = (props: ArticleHeaderProps) => {
  return (
    <header className="mb-8 flex flex-col space-y-3 border-b border-dashed border-neutral-200 py-4 dark:border-neutral-800">
      <h2 className="font-headings text-4xl font-semibold tracking-tight">
        {props.data.title}
      </h2>
      <p className="font-mono tracking-tight text-neutral-500 dark:text-neutral-400">
        {props.data.description}
      </p>
    </header>
  );
};

export default ArticleHeader;
