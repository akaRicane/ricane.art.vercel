import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import Link from "next/link";

export const HomeHeader = () => {
  return (
    <header className="flex flex-row bg-white dark:bg-purple-500 w-full h-14 m-0 p-0 fixed top-0 left-0 overflow-hidden">
      <div className="flex flex-row m-0 p-0 basis-3/4">
        <Button className="h-full rounded-md" variant={"ghost"} asChild>
          <Link href="/">ricane.art</Link>
        </Button>
      </div>
      <div className="flex flex-row m-0 p-0 basis-1/4 justify-end mr-4">
        <ThemeToggle></ThemeToggle>
        {/* <Button className="h-full rounded-md" variant={"ghost"}>
          login
        </Button> */}
      </div>
    </header>
  );
};
