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
import Link from "next/link";


export const HomeRedirectCarousel = () => {
  const [musicCardFocus, setMusicCardFocus] = React.useState<boolean>(false);
  const [projectsCardFocus, setProjectsCardFocus] =
    React.useState<boolean>(false);
  const [whoamiCardFocus, setWhoamiCardFocus] = React.useState<boolean>(false);

  const onClickFromCard = (target: String) => {
    switch (target) {
      case "music": {
        setMusicCardFocus(!musicCardFocus);
        setProjectsCardFocus(false);
        setWhoamiCardFocus(false);
        break;
      }
      case "projects": {
        setMusicCardFocus(false);
        setProjectsCardFocus(!projectsCardFocus);
        setWhoamiCardFocus(false);
        break;
      }
      case "whoami": {
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
  };

  const focusedStyledCardContent: string =
    "flex aspect-square items-center justify-center p-0";
  const notFocusedStyledCardContent: string =
    "flex aspect-square items-center justify-center p-0";
  const cardContentSpanStyle: string = "text-4xl font-semibold";

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
                  <span className={cardContentSpanStyle}>
                    some more details about music
                  </span>
                ) : (
                  <p className={cardContentSpanStyle}>music</p>
                )}
              </CardContent>
              <CardFooter>
                {musicCardFocus ? (
                  <Button className="w-full">
                    <Link href="/music">visit</Link>
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
                  <span className={cardContentSpanStyle}>
                    some more details about projects
                  </span>
                ) : (
                  <p className={cardContentSpanStyle}>projects</p>
                )}
              </CardContent>
              <CardFooter>
                {projectsCardFocus ? (
                  <Button
                    className="w-full"
                  >
                    <Link href="/projects">visit</Link>
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
                  <span className={cardContentSpanStyle}>
                    some more details about me
                  </span>
                ) : (
                  <p className={cardContentSpanStyle}>who am i ?</p>
                )}
              </CardContent>
              <CardFooter>
                {whoamiCardFocus ? (
                  <Button
                    className="w-full"
                  >
                    <Link href="/whoami">visit</Link>
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
