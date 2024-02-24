import { Button } from "@/components/ui/button";
import { MusicHeader } from "@/components/custom/MusicHeader";

import ricaneImage from "@/public/Ricane_purple_fog.png";
import Image from "next/image";
import Link from "next/link";

export default function MusicPage() {
  return (
    <div>
      <MusicHeader />
      <div className="flex flex-col my-0 mx-0">
        <div className="flex flex-row justify-center w-full mx-0">
          <Image src={ricaneImage} alt="ricane_fog" placeholder="blur"/>
        </div>
        <div>
          <Button>
            <Link href="/music/releases">releases</Link>
          </Button>
          <Button>
            <Link href="/music/livesessions">live sessions</Link>
          </Button>
          <Button>
            <Link href="/music/mastering">mix & mastering</Link>
          </Button>
          <Button>
            <Link href="/music/contact">contact</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
