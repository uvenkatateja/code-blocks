import type { ReactNode } from "react";
import { SparkleCard } from "./ui/sparkleCard";

import { Reactjs, Tailwind } from "@react-symbols/icons";
import ExternalLink from "./ui/externalLink";
import { buttonVariants } from "./ui/button";
import { Shiki } from "./ui/icons";

interface HeroProps {
  children: ReactNode;
}

const technologies = [
  {
    name: "Shiki",
    icon: <Shiki width={25} height={25} aria-label="Shiki" />,
    url: "https://shiki.style/",
  },
  {
    name: "React",
    icon: <Reactjs width={32} height={32} aria-label="React" />,
    url: "https://react.dev/",
  },
  {
    name: "Tailwind CSS",
    icon: <Tailwind width={32} height={32} aria-label="Tailwind CSS" />,
    url: "https://tailwindcss.com/",
  },
];

const Hero = (props: HeroProps) => {
  return (
    <SparkleCard
      className="not-prose"
      sparklePositions={["top-left", "bottom-right"]}
    >
      <div className="flex flex-col space-y-0.5">
        <h2 className="font-headings text-black dark:text-white text-3xl font-semibold tracking-tight">
          Codeblocks
        </h2>
        <p className="text-lg tracking-tighter text-neutral-600 dark:text-neutral-400">
          A beautifully code block component for React & MDX.
        </p>
      </div>
      <div className="my-3 flex items-center justify-start space-x-0.5">
        {technologies.map((tech) => (
          <ExternalLink
            key={tech.name}
            title={tech.name}
            href={tech.url}
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
            })}
          >
            {tech.icon}
          </ExternalLink>
        ))}
      </div>
      <div>{props.children}</div>
    </SparkleCard>
  );
};

export default Hero;
