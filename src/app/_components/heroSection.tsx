import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-full min-h-screen flex items-center contain-in-section">
      <div className="w-full flex justify-center items-center gap-[50px]">
        <div className="flex-grow">
          {/* <Image
            className="rounded-sm shadow-md"
            src={"https://i.pinimg.com/736x/dd/2c/8e/dd2c8e3b40899eeba8e5a711bd27b850.jpg"}
            width={350}
            height={500}
            alt="my image"
          /> */}
          <div className="rounded-sm shadow-md w-full h-[640px] bg-t2-c flex-grow "></div>
        </div>
        <div className="flex flex-col w-[750px]">
          <h1 className="font-extrabold text-t-lg leading-tight">
            Hi, I'm Chinmay and <br /> I'm a Frontend Developer.
          </h1>
          <p className="pt-[15px] pr-[140px] text-t2-lg leading-snug text-t2-c">
            I'm Junior Java Developer based in Gdansk, Poland. I have 1 year of
            commercial experience and I specialize im creating web apps. I am
            open for new opportunities and intresting projects.
          </p>
          <div className="flex items-center gap-[20px] pt-[15px]">
            <Button className="px-[40px]">Contact me</Button>
            <Button className="px-[40px]" variant={"outline"}>
              Check my Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
