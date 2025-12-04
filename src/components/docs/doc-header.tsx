interface DocHeaderProps {
  title: string;
  description: string;
}

const DocHeader = ({ title, description }: DocHeaderProps) => {
  return (
    <div className="flex flex-col space-y-1 pt-2">
      <h4 className="text-4xl font-semibold tracking-tight">{title}</h4>
      <p className="text-lg text-zinc-600 dark:text-zinc-400">{description}</p>
    </div>
  );
};

export default DocHeader;
