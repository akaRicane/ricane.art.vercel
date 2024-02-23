"use client";

import React from "react";
import { Button } from "@/components/ui/button";
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

export const HomeRedirectCarousel = () => {
  const [musicCardFocus, setMusicCardFocus] = React.useState<Boolean>(false);
  const [projectsCardFocus, setProjectsCardFocus] =
    React.useState<Boolean>(false);
  const [whoamiCardFocus, setWhoamiCardFocus] = React.useState<Boolean>(false);

  const onClickFromCard = (target: String) => {
    console.log(target);
    switch (target) {
      case "music": {
        setMusicCardFocus(!musicCardFocus);
        setProjectsCardFocus(false);
        setWhoamiCardFocus(false);
        break;
      }
      case "visit-music": {
        console.log("visit music clicked");
        break;
      }
      case "projects": {
        setMusicCardFocus(false);
        setProjectsCardFocus(!projectsCardFocus);
        setWhoamiCardFocus(false);
        break;
      }
      case "visit-projects": {
        console.log("visit projects clicked");
        break;
      }
      case "whoami": {
        setMusicCardFocus(false);
        setProjectsCardFocus(false);
        setWhoamiCardFocus(!whoamiCardFocus);
        break;
      }
      case "visit-whoami": {
        console.log("visit who am i clicked");
        break;
      }
      default: {
        setMusicCardFocus(false);
        setProjectsCardFocus(false);
        setWhoamiCardFocus(false);
      }
    }
  };

  const focusedStyledCardContent =
    "flex aspect-square items-center justify-center p-0";
  const notFocusedStyledCardContent =
    "flex aspect-square items-center justify-center p-0";
  const cardContentSpanStyle = "text-4xl font-semibold";

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
            <Card>
              <CardContent
                className={focusedStyledCardContent}
                onClick={() => onClickFromCard("music")}
              >
                {musicCardFocus ? (
                  <span className={cardContentSpanStyle}>some more details about music</span>
                ) : (
                  <p className={cardContentSpanStyle}>music</p>
                )}
              </CardContent>
              <CardFooter>
                {musicCardFocus ? (
                  <Button
                    className="w-full"
                    onClick={() => onClickFromCard("visit-music")}
                  >
                    visit
                  </Button>
                ) : (
                  <></>
                )}
              </CardFooter>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem key={1}>
          <div className="p-1">
            <Card>
              <CardContent
                className={focusedStyledCardContent}
                onClick={() => onClickFromCard("projects")}
              >
                {projectsCardFocus ? (
                  <span className={cardContentSpanStyle}>some more details about projects</span>
                ) : (
                  <p className={cardContentSpanStyle}>projects</p>
                )}
              </CardContent>
              <CardFooter>
                {projectsCardFocus ? (
                  <Button
                    className="w-full"
                    onClick={() => onClickFromCard("visit-projects")}
                  >
                    visit
                  </Button>
                ) : (
                  <></>
                )}
              </CardFooter>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem key={2}>
          <div className="p-1">
            <Card>
              <CardContent
                className={focusedStyledCardContent}
                onClick={() => onClickFromCard("whoami")}
              >
                {whoamiCardFocus ? (
                  <span className={cardContentSpanStyle}>some more details about me</span>
                ) : (
                  <p className={cardContentSpanStyle}>who am i ?</p>
                )}
              </CardContent>
              <CardFooter>
                {whoamiCardFocus ? (
                  <Button
                    className="w-full"
                    onClick={() => onClickFromCard("visit-whoami")}
                  >
                    visit
                  </Button>
                ) : (
                  <></>
                )}
              </CardFooter>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
