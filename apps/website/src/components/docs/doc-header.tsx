import ShowCategories from "@/components/docs/show-categories";

interface DocHeaderProps {
  title: string;
  description: string;
  category: string[];
}

const DocHeader = ({ title, description, category }: DocHeaderProps) => {
  return (
    <div className="flex flex-col space-y-1 pt-2">
      <h4 className="font-headings text-4xl font-semibold tracking-tight">
        {title}
      </h4>
      <p className="text-lg text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
      <ShowCategories className="mt-2" categories={category} />
    </div>
  );
};

export default DocHeader;
