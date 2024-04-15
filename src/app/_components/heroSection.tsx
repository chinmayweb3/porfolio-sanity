import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-full min-h-screen flex items-center contain-in">
      <div className="w-full flex justify-center items-center gap-[20px]">
        <div>
          <Image
            className="rounded-sm shadow-md"
            src={"https://i.pinimg.com/736x/dd/2c/8e/dd2c8e3b40899eeba8e5a711bd27b850.jpg"}
            width={350}
            height={500}
            alt="my image"
          />
        </div>
        <div className="flex flex-col w-[550px]">
          <h1 className="font-extrabold text-[42px] leading-10">
            Hi, I'm Chinmay and <br /> I'm a Frontend Developer.
          </h1>
          <p className="pt-[10px] pr-[140px] text-[12px]">
            I'm Junior Java Developer based in Gdansk, Poland. I have 1 year of commercial experience and I specialize im creating web apps. I am open
            for new opportunities and intresting projects.
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
