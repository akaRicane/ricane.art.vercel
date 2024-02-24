
import React from 'react'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
      <div className="flex flex-row justify-end mr-4">
        <ThemeToggle />
      </div>
    </div>
  );
}
