import { Button } from "@/components/ui/button";
import { heroApi } from "@/lib/api";
import Image from "next/image";
import React from "react";

export const revalidate = 10; // revalidate at most every hour

const HeroSection = async () => {
  const resp = await heroApi();

  return (
    <section className="w-full h-full pt-[150px] msm:pt-[110px] pb-[75px] mlg:pb-[50px] msm:pb-[30px] flex items-center contain-in-section">
      <div className="w-full grid grid-cols-[1fr_1.45fr] mlg:grid-cols-1 gap-[40px] msm:gap-[30px] items-center">
        <div className="flex-grow aspect-[1/1.3] mlg:w-[30%] mlg:mx-auto msm:w-[40%]">
          {resp.imageurl && (
            <Image
              className="rounded-sm shadow-2xl w-full h-full object-cover"
              src={resp.imageurl}
              width={350}
              height={500}
              alt="my image"
            />
          )}
        </div>
        <div className="flex flex-col flex-grow mlg:items-center msm:text-center">
          <h1
            dangerouslySetInnerHTML={{
              __html: resp.title[0].children.map((c: any) => c.text).join(""),
            }}
            className="font-extrabold text-t-lg mlg:text-t-md msm:text-t-sm leading-tight"
          >
            {/* Hi, I'm Chinmay and <br /> I'm a Frontend Developer. */}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: resp.para[0].children
                .map((child: any) => child.text)
                .join(""),
            }}
            className="pt-[15px] w-[70%] msm:w-[90%] text-t2-lg msm:text-t2-sm leading-snug text-t2-c"
          >
            {/* I'm Junior Java Developer based in Gdansk, Poland. I have 1 year of
            commercial experience and I specialize im creating web apps. I am
            open for new opportunities and intresting projects. */}
          </p>
          <div className="flex items-center gap-[20px] pt-[15px]">
            <a href="#contact">
              <Button className="px-[40px] msm:px-[25px]">Contact me</Button>
            </a>
            <a href="#work">
              <Button className="px-[40px] msm:px-[25px]" variant={"outline"}>
                Check my Work
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
