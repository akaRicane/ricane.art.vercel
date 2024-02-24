
import { MusicSubPagesHeader } from '@/components/custom/MusicSubPagesHeader'
import React from 'react'

export default function ReleasesPage() {

  const lastReleasedMusicPath: string = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/807520288&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true";
  const releasedMusicPaths: string[] = [
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/807520288&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/785513416&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
  ];

  return (
    <div className='h-screen w-full m-0 p-0'>
      <MusicSubPagesHeader />
      <div className="w-full flex flex-col">
        <div className="flex flex-col justify-center self-center mx-12 my-4 w-full">
          <p className="flex flex-row self-center mb-4">last released</p>
          <div className="w-[90vw] self-center">
            <iframe
              width="100%"
              height="300"
              allow="autoplay"
              src={lastReleasedMusicPath}
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col justify-center self-center mx-12 mt-4 mb-8 w-full">
          <p className="flex flex-row self-center mb-4">all releases</p>
          <div className="w-[90vw] self-center">
            {releasedMusicPaths.map((releasedPath: string, index: number) => (
              <iframe
                key={index}
                width="100%"
                height="130"
                allow="autoplay"
                className='mb-2'
                src={releasedPath}
              ></iframe>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
