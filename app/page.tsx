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
        home body Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Integer blandit tempor risus, a sollicitudin tortor feugiat a. Nullam id
        neque sit amet tellus semper condimentum. Maecenas nisl nulla,
        condimentum non diam sed, gravida efficitur purus. Phasellus tempus at
        nulla cursus convallis. Phasellus mi leo, suscipit non hendrerit eu,
        lobortis in lectus.
      </p>
      <div className="flex flex-row mb-8 items-center">
        <p className="flex justify-start basis-3/4 items-center text-xl m-0">explore</p>
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
