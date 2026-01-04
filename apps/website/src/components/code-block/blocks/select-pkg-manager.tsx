"use client";

import { useState, type FC, type SVGProps } from "react";
import { usePkgManager, type PackageManager } from "@/stores/pkgManager";

import { cn } from "@/utils/cn";
import { CheckIcon, ChevronDownIcon } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bun, NPM, PNPM, Yarn } from "@react-symbols/icons";

interface Package {
  name: PackageManager;
  icon: FC<SVGProps<SVGSVGElement>>;
}

const Packages: Package[] = [
  {
    name: "npm",
    icon: NPM,
  },
  {
    name: "pnpm",
    icon: PNPM,
  },
  {
    name: "yarn",
    icon: Yarn,
  },
  {
    name: "bun",
    icon: Bun,
  },
];

const SelectPkgManager = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { packageManager, setPackageManager } = usePkgManager();

  const selectedPkg =
    Packages.find((pkg) => pkg.name === packageManager) ?? Packages[0];
  const Icon = selectedPkg.icon;

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        title="Select Package Manager"
        className="group flex cursor-pointer items-center space-x-1 px-2"
      >
        <Icon className="size-4" />
        <ChevronDownIcon
          size={13}
          className={cn(
            "transform transition-transform duration-200 ease-in-out",
            "group-hover:text-black dark:group-hover:text-white",
            isOpen && "rotate-180 text-black dark:text-white",
          )}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" alignOffset={2}>
        {Packages.map((pkg) => {
          const PkgIcon = pkg.icon;
          return (
            <DropdownMenuItem
              key={pkg.name}
              title={`Using ${pkg.name}`}
              onClick={() => setPackageManager(pkg.name)}
              className="flex w-full items-center justify-between"
            >
              <div className="flex items-center space-x-2">
                <PkgIcon className="size-4" />
                <span>{pkg.name}</span>
              </div>
              {selectedPkg.name === pkg.name && <CheckIcon width={14} />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SelectPkgManager;
