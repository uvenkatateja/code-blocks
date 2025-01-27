"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ChangeTheme = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex w-full items-center justify-between px-3 shadow-none"
        >
          <div className="flex items-center space-x-[9px]">
            {mounted &&
              (theme === "light" ? (
                <MoonIcon
                  size={16}
                  strokeWidth={1.5}
                  className="animate-in fade-in-20 duration-500"
                />
              ) : (
                <SunIcon
                  size={16}
                  strokeWidth={1.5}
                  className="animate-in fade-in-20 duration-500"
                />
              ))}
            <span>Change Theme</span>
          </div>
          {isOpen ? (
            <ChevronUp
              size={14}
              className="text-neutral-400 dark:text-neutral-500"
            />
          ) : (
            <ChevronDown
              size={14}
              className="text-neutral-400 dark:text-neutral-500"
            />
          )}
          <span className="sr-only">Change Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ChangeTheme;
