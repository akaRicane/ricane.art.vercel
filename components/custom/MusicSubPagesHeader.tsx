
import React from 'react'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Home } from 'lucide-react'
import MusicLayout from '../../app/music/layout';

export const MusicSubPagesHeader = () => {
  const musicMenuButtonStyle: string = "w-full h-full";

  return (
    <div className="w-full h-14 m-0 p-0 flex flex-row">
      <div className="w-full flex flex-row justify-around self-center">
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
      <div className="flex flex-row justify-end self-center mr-4">
        <Button className="" variant="ghost">
          <Link href="/music" className="self-center">
            <Home className="w-6 h-6 stroke-1 stroke-purple-700 self-center" />
          </Link>
        </Button>
        <ThemeToggle/>
      </div>
    </div>
  );
}
