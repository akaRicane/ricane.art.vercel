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

import mToeImage from "@/public/m_toe-cover.jpeg";
import Image from "next/image";

export const MusicSubPageMasteringCarousel = () => {
  return (
    <Carousel
      className="w-full max-w-[600px] p-0 m-0 mb-24"
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="h-full">
        <CarouselItem key={0}>
          <Card className="">
            <CardHeader className="flex flex-row justify-center self-center">
              <span>M.TOE</span>
            </CardHeader>
            <CardContent className="flex flex-row justify-center self-center">
              <div className="">
                <Image
                  src={mToeImage}
                  alt="mToeImage"
                  placeholder="blur"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-row justify-center self-center">
              <span>M.Toe footer</span>
            </CardFooter>
          </Card>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
