"use client";

import React from "react";
import { HomeRedirectAccordion } from "@/components/custom/HomeRedirectAccordion";
import { HomeRedirectCarousel } from "@/components/custom/HomeRedirectCarousel";
import { Switch } from "@/components/ui/switch";

export default function Home() {
  const [carouselSwitchActive, setCarouselSwitchActive] = React.useState<boolean>(true);

  return (
    <div className="overflow-y-auto mx-12 my-24 mb-12">
      <p className="mb-12 font-extralight">
        Welcome to ricane.art! Explore my dynamic realm, where music,
        programming, and art collide. Dive into melodic beats and digital
        innovations across the Music and Projects sections, or uncover the
        essence of Ricane in the Who Am I page. Embark on a journey where
        creativity knows no bounds, curated by the composer, producer, DJ, and
        programmer behind the scenes. Discover, experience, and immerse yourself
        in my eclectic world.
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
        <div className="flex flex-row justify-center">
          <HomeRedirectCarousel></HomeRedirectCarousel>
        </div>
      ) : (
        <HomeRedirectAccordion></HomeRedirectAccordion>
      )}
    </div>
  );
};
