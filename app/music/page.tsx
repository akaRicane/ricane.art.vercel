import { Button } from "@/components/ui/button";
import { MusicHeader } from "@/components/custom/MusicHeader";

import ricaneImage from "@/public/Ricane_purple_fog.png";
import Image from "next/image";
import Link from "next/link";

import { Instagram, AudioLines } from "lucide-react";

export default function MusicPage() {
  const musicMenuButtonStyle: string = "w-full h-full";
  const musicIconsStyle: string = "w-12 h-12 stroke-1 stroke-purple-700";

  return (
    <div className='h-screen w-full m-0 p-0'>
      <MusicHeader />
      <div className="flex flex-col my-0 mx-0 justify-center">
        <div className="flex flex-row justify-center max-h-[70vh] aspect-video self-center">
          <Image src={ricaneImage} alt="ricane_fog" placeholder="blur" />
        </div>
        <div className="flex flex-row justify-around w-[50vw] mt-12 self-center">
          <Button className={musicMenuButtonStyle} variant="ghost">
            <Link href="/music/releases">releases</Link>
          </Button>
          <Button className={musicMenuButtonStyle} variant="ghost">
            <Link href="/music/livesessions">live sessions</Link>
          </Button>
          <Button className={musicMenuButtonStyle} variant="ghost">
            <Link href="/music/mastering">mix & mastering</Link>
          </Button>
          <Button className={musicMenuButtonStyle} variant="ghost">
            <Link href="/music/contact">contact</Link>
          </Button>
        </div>
        <div className="flex flex-row justify-around w-[50vw] my-12 self-center">
          <Link href="https://www.instagram.com/akaricane" target="_blank">
            <Instagram className={musicIconsStyle} />
          </Link>
          <Link
            href="https://soundcloud.com/ricane-lebol?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
            target="_blank"
          >
            <AudioLines className={musicIconsStyle} />
          </Link>
        </div>
      </div>
    </div>
  );
}
