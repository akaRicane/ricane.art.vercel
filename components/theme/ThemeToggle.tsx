"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { Moon, SunMedium } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="h-full"
      variant="ghost"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <SunMedium className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};
