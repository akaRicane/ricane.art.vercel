import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <header className="flex flex-row bg-orange-500 w-full h-14 m-0 p-0 fixed top-0 left-0 overflow-hidden">
      <div className="flex flex-row w-60 m-0 p-0 basis-3/4">
        <Button className="h-full rounded-md" variant={"ghost"}>
          ricane.art
        </Button>
      </div>
      <div className="flex flex-row m-0 p-0 basis-1/4 justify-center">
        <ThemeToggle></ThemeToggle>
        <Button className="h-full rounded-md" variant={"ghost"}>
          login
        </Button>
      </div>
    </header>
  );
};
