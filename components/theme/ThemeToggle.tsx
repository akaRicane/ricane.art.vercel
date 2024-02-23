"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className="mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
      variant="ghost"
      size="sm"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      Change Theme
    </Button>
  );
};
