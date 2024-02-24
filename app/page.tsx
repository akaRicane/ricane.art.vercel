"use client";

import React from "react";
import { HomeRedirectAccordion } from "@/components/custom/HomeRedirectAccordion";
import { HomeRedirectCarousel } from "@/components/custom/HomeRedirectCarousel";
import { Switch } from "@/components/ui/switch";
import { HomeHeader } from "@/components/custom/HomeHeader";
import { HomeFooter } from "@/components/custom/HomeFooter";

export default function Home() {
  const [carouselSwitchActive, setCarouselSwitchActive] =
    React.useState<boolean>(false);

  return (
    <div className='h-screen w-full m-0 p-0'>
      <HomeHeader></HomeHeader>
      <div className="overflow-y-auto mx-12 my-24 mb-12">
        <p className="mb-12 font-extralight">
          Welcome to ricane.art! Explore my dynamic realm, where music,
          programming, and art collide. Dive into melodic beats and digital
          innovations across the Music and Projects sections, or uncover the
          essence of Ricane in the Who Am I page. Embark on a journey where
          creativity knows no bounds, curated by the composer, producer, DJ,
          audio engineer, and programmer behind the scenes. Discover,
          experience, and immerse yourself in my eclectic world.
        </p>
        <div className="flex flex-row mb-8 items-center">
          <p className="flex justify-start basis-3/4 items-center text-xl m-0">
            explore
          </p>
          <div className="flex flex-row justify-end basis-1/4 text-xs font-extralight items-center">
            <Switch
              checked={carouselSwitchActive}
              onCheckedChange={() =>
                setCarouselSwitchActive(!carouselSwitchActive)
              }
            ></Switch>
            <p className="ml-2">change view</p>
          </div>
        </div>
        {carouselSwitchActive ? (
          <div className="flex flex-row justify-center mb-8">
            <HomeRedirectCarousel></HomeRedirectCarousel>
          </div>
        ) : (
          <div className="mb-8">
            <HomeRedirectAccordion></HomeRedirectAccordion>
          </div>
        )}
      </div>
      <HomeFooter></HomeFooter>
    </div>
  );
}
