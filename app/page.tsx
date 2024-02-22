"use client";

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Button
        className="mt-16 px-4 py-2 text-white dark:text-black bg-black dark:bg-white font-semibold rounded-md"
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Change Theme
      </Button>
    </>
  );
}
