"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const [redirectTarget, setRedirectTarget] = React.useState<string>('/');
  const pathname = usePathname();

  React.useEffect(() => {
    const splittedPathname = pathname.split("/");

    if (splittedPathname.length > 1) {
      const subDomain = splittedPathname.at(1);
      if (subDomain === "music") {
        setRedirectTarget("/music")
      }
    }
  }, [pathname]);

  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <div className="flex flex-row justify-center">
        <p className="justify-center">Oups, page not found - 404!</p>
      </div>
      <div className="flex flex-row justify-center">
        <Button variant="ghost">
          <Link href={redirectTarget}>
            go back to ricane.art{redirectTarget}
          </Link>
        </Button>
      </div>
    </div>
  );
}
