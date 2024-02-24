"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const HomeRedirectAccordion = () => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>music</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-row items-center">
            <p className="basis-3/4 font-extralight">some more details about music</p>
            <Button
              className="h-full rounded-md flex justify-end"
              variant={"ghost"}
              asChild
            >
              <Link href="/music">visit</Link>
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>projects</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-row items-center">
            <p className="basis-3/4 font-extralight">some more details about projects</p>
            <Button
              className="h-full rounded-md flex justify-end"
              variant={"ghost"}
              asChild
            >
              <Link href="/projects">visit</Link>
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>who am I ?</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-row items-center">
            <p className="basis-3/4 font-extralight">some more details about me</p>
            <Button
              className="h-full rounded-md flex justify-end"
              variant={"ghost"}
              asChild
            >
              <Link href="/whoami">visit</Link>
            </Button>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
