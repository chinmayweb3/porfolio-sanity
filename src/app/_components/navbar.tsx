import { Button } from "@/components/ui/button";
import React from "react";

const Navbar = () => {
  return (
    <nav className="h-[70px] w-full fixed contain bg-background">
      <div className="h-full max-w-[19200px] mx-auto grid grid-cols-3 items-center bg-background">
        <h1 className="font-black font-mono">CS</h1>
        <ul className="flex items-center mx-auto">
          <li>
            <Button variant={"ghost"}>Work</Button>
          </li>
          <li>
            <Button variant={"ghost"}>Resume</Button>
          </li>
          <li>
            <Button variant={"ghost"}>Contact</Button>
          </li>
        </ul>
        <ul className="flex items-center ml-auto">
          <li>
            <Button asChild variant={"link"}>
              <a
                href="https://www.linkedin.com/in/chinmay-suryavanshi-76a4b2240/"
                target="_blank"
              >
                LinkedIn
              </a>
            </Button>
          </li>
          <li>
            <Button asChild variant={"link"}>
              <a
                href="https://github.com/chinmayweb3?tab=repositories"
                target="_blank"
              >
                Github
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
