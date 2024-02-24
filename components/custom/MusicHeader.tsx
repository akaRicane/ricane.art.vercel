import React from "react";
import { ThemeToggle } from "../theme/ThemeToggle";

export const MusicHeader = () => {
  return (
    <header className="flex flex-row w-full h-14 m-0 p-0 ">
      <div className="flex w-full h-full m-0 p-0 justify-center ml-14">
        <p className="flex flex-col justify-center align-middle">
          ricane music
        </p>
      </div>
      <div className="flex flex-row m-0 p-0 justify-end mr-4 w-10">
        <ThemeToggle />
      </div>
    </header>
  );
};
