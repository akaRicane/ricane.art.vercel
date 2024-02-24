"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const MusicLiveSessionsDjSetCarousel = () => {
  const djSetsPaths: string[] = [
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/888803962&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/813711295&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
  ];

  return (
    <Carousel
      className="w-full p-0 m-0"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="w-full h-full m-0 p-0">
        {djSetsPaths.map((djSetPath: string, index: number) => (
          <CarouselItem key={index}>
              <Card className="w-full h-full m-0 p-0">
                <CardContent className="w-full h-full m-0 p-0">
                  <iframe
                    width="100%"
                    height="400"
                    allow="autoplay"
                    className="m-0 p-0"
                    src={djSetPath}
                  ></iframe>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};