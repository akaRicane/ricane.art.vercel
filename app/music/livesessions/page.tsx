"use client";

import { MusicLiveSessionsCollabsCarousel } from "@/components/custom/MusicLiveSessionsCollabsCarousel";
import { MusicLiveSessionsDjSetCarousel } from "@/components/custom/MusicLiveSessionsDjSetCarousel";
import { MusicSubPagesHeader } from "@/components/custom/MusicSubPagesHeader";
import { Button } from "@/components/ui/button";
import React from 'react'

export default function LiveSessionsPage() {
  const [choiceButton, setChoiceButton] = React.useState<string>("djset");
  const liveSessionsChoiceButtonStyle: string = "w-[20vw]";

  return (
    <div className="h-screen w-full m-0 p-0 flex flex-col">
      <MusicSubPagesHeader />
      <div className="w-full flex flex-col min-h-[70vh]">
        <div className="flex flex-row justify-around self-center my-12">
          <Button
            className={liveSessionsChoiceButtonStyle}
            variant="ghost"
            onClick={() => setChoiceButton("djset")}
          >
            dj set
          </Button>
          <Button
            className={liveSessionsChoiceButtonStyle}
            variant="ghost"
            onClick={() => setChoiceButton("collabs")}
          >
            collabs
          </Button>
        </div>
        <div className="flex self-center mx-24 w-[80vw] min-h-[300]">
          {choiceButton === "collabs" ? (
            <MusicLiveSessionsCollabsCarousel/>
          ) : (
            <MusicLiveSessionsDjSetCarousel />
          )}
        </div>
      </div>
    </div>
  );
}
