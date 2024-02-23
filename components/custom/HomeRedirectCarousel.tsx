"use client";

import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const HomeRedirectCarousel = () => {
  const [musicCardFocus, setMusicCardFocus] = React.useState<Boolean>(false);
  const [projectsCardFocus, setProjectsCardFocus] = React.useState<Boolean>(false);
  const [whoamiCardFocus, setWhoamiCardFocus] = React.useState<Boolean>(false);

  const toggleFocus = (target: String) => {
    console.log(`Toggle focus ${target}`);
    switch (target) {
      case 'music': {
        setMusicCardFocus(!musicCardFocus);
        setProjectsCardFocus(false);
        setWhoamiCardFocus(false);
        break;
      }
      case 'projects': {
        setMusicCardFocus(false);
        setProjectsCardFocus(!projectsCardFocus);
        setWhoamiCardFocus(false);
        break;
      }
      case 'whoami': {
        setMusicCardFocus(false);
        setProjectsCardFocus(false);
        setWhoamiCardFocus(!whoamiCardFocus);
        break;
      }
      default: {
        setMusicCardFocus(false);
        setProjectsCardFocus(false);
        setWhoamiCardFocus(false);
      }
    }

  }

  return (
    <Carousel
      className="w-full max-w-xs"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent>
        <CarouselItem key={0}>
          <div className="p-1">
            <Card onClick={() => toggleFocus("music")}>
              {musicCardFocus ? (
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <span className="text-4xl font-semibold">music focused</span>
                </CardContent>
              ) : (
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <span className="text-4xl font-semibold">
                    music not focused
                  </span>
                </CardContent>
              )}
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem key={1}>
          <div className="p-1">
            <Card onClick={() => toggleFocus("projects")}>
              {projectsCardFocus ? (
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <span className="text-4xl font-semibold">
                    projects focused
                  </span>
                </CardContent>
              ) : (
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <span className="text-4xl font-semibold">
                    projects not focused
                  </span>
                </CardContent>
              )}
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem key={2}>
          <div className="p-1">
            <Card onClick={() => toggleFocus("whoami")}>
              {whoamiCardFocus ? (
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <span className="text-4xl font-semibold">who am i focused</span>
                </CardContent>
              ) : (
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <span className="text-4xl font-semibold">
                    who am i not focused
                  </span>
                </CardContent>
              )}
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
