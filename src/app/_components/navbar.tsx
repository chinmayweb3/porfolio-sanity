import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { Assistant } from "next/font/google";
import React from "react";

const inter = Assistant({
  weight: ["700"],
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <nav className="h-top w-full fixed contain-in bg-background z-[10] shadow-sm">
      <div className="h-full max-w-[19200px] mx-auto grid grid-cols-3 mmd:grid-cols-2 items-center bg-background">
        <h1 className={cn("font-semibold tracking-widest")}>CHINMAY</h1>
        <ul className="flex items-center mx-auto mmd:hidden">
          <li>
            <a href="#work">
              <Button variant={"ghost"}>Work</Button>
            </a>
          </li>
          <li>
            <a href="#resume">
              <Button variant={"ghost"}>Resume</Button>
            </a>
          </li>
          <li>
            <a href="#contact">
              <Button variant={"ghost"}>Contact</Button>
            </a>
          </li>
        </ul>
        <ul className="flex items-center ml-auto mmd:hidden">
          <li>
            <Button asChild variant={"link"}>
              <a
                href="https://www.linkedin.com/in/chinmay-suryavanshi-76a4b2240/"
                target="_blank"
              >
                {/* LinkedIn */}
                <LinkedinIcon />
              </a>
            </Button>
          </li>
          <li>
            <Button asChild variant={"link"}>
              <a
                href="https://github.com/chinmayweb3?tab=repositories"
                target="_blank"
              >
                <GithubIcon />
              </a>
            </Button>
          </li>
        </ul>
        <div className="hidden ml-auto mmd:block">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                aria-label="hamburger"
                aria-labelledby="hamburger-btn"
              >
                <HamburgerMenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side={"right"}>
              <div className="flex flex-col justify-between h-full w-full">
                <ul className="flex flex-col items-center mx-auto pt-[50px] text-[22px]">
                  <li>
                    <a href="#work">
                      <SheetClose>
                        <Button variant={"ghost"}>Work</Button>
                      </SheetClose>
                    </a>
                  </li>
                  <li>
                    <a href="#resume">
                      <SheetClose>
                        <Button variant={"ghost"}>Resume</Button>
                      </SheetClose>
                    </a>
                  </li>
                  <li>
                    <a href="#contact">
                      <SheetClose>
                        <Button variant={"ghost"}>Contact</Button>
                      </SheetClose>
                    </a>
                  </li>
                </ul>

                <ul className="flex items-center mx-auto pt-[20px] text-[22px]">
                  <li>
                    <a href="#work">
                      <SheetClose>
                        <Button variant={"ghost"}>
                          <a
                            aria-label="Linkedin Link"
                            href="https://www.linkedin.com/in/chinmay-suryavanshi-76a4b2240/"
                            target="_blank"
                          >
                            <LinkedinIcon />
                          </a>
                        </Button>
                      </SheetClose>
                    </a>
                  </li>
                  <li>
                    <a href="#resume">
                      <SheetClose>
                        <Button variant={"ghost"}>
                          <a
                            aria-label="Github Link"
                            href="https://github.com/chinmayweb3?tab=repositories"
                            target="_blank"
                          >
                            <GithubIcon />
                          </a>
                        </Button>
                      </SheetClose>
                    </a>
                  </li>
                </ul>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
