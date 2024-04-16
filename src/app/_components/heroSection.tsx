import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full h-full pt-[150px] pb-[75px] mlg:pb-[50px] flex items-center contain-in-section">
      {/* <div className="w-full flex justify-center items-center gap-[50px]"> */}
      <div className="w-full grid grid-cols-[1fr_1.45fr] mlg:grid-cols-1 gap-[40px] items-center">
        <div className="flex-grow aspect-[1/1.3] mlg:w-[30%] mlg:mx-auto">
          {/* <Image
            className="rounded-sm shadow-md"
            src={"https://i.pinimg.com/736x/dd/2c/8e/dd2c8e3b40899eeba8e5a711bd27b850.jpg"}
            width={350}
            height={500}
            alt="my image"
          /> */}
          <div className="rounded-sm shadow-2xl w-full h-full bg-t2-c "></div>
        </div>
        <div className="flex flex-col flex-grow mlg:items-center text-center">
          <h1 className="font-extrabold text-t-lg mlg:text-t-md leading-tight">
            Hi, I'm Chinmay and <br /> I'm a Frontend Developer.
          </h1>
          <p className="pt-[15px] w-[70%] text-t2-lg leading-snug text-t2-c">
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
