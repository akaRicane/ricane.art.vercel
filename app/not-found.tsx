import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <div className="flex flex-row justify-center">
        <p className="justify-center">Oups, page not found - 404!</p>
      </div>
      <div className="flex flex-row justify-center">
        <Button
          variant="ghost"
        >
          <Link href="/">go back to ricane.art</Link>
        </Button>
      </div>
    </div>
  );
}
