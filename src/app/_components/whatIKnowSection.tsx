import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const WhatIKnowSection = () => {
  return (
    <div
      id="whatiknow"
      className="w-full  contain-in-section py-[75px] mlg:py-[50px] msm:py-[30px]"
    >
      <div className="flex flex-col items-center">
        <h2
          //   dangerouslySetInnerHTML={{
          //     __html: resp.title[0].children.map((c: any) => c.text).join(""),
          //   }}
          className="font-extrabold text-t-lg mlg:text-t-md msm:text-t-sm"
        >
          What I Know
        </h2>
        <p
          //   dangerouslySetInnerHTML={{
          //     __html: resp.para[0].children
          //       .map((child: any) => child.text)
          //       .join(""),
          //   }}
          className="text-t2-lg msm:text-t2-sm text-t2-c text-center leading-tight"
        >
          Check my commercial and non commercial projects. <br /> If you have
          any questions feel free to ask me for more information.
        </p>
        <div className="flex flex-wrap justify-center gap-[10px] mt-[40px] msm:mt-[30px] w-full">
          <Card className="basis-[28%] mlg:basis-[30%] msm:basis-[48%] ">
            <CardHeader className="msm:p-[1rem_1rem_1.2rem]">
              <CardTitle>Create project</CardTitle>
            </CardHeader>
            <CardContent className="msm:p-[0_1rem_1rem] flex flex-wrap justify-start gap-x-[10px] gap-y-[8px]">
              <Badge
                variant={"secondary"}
                className="rounded-full font-normal px-[15px] mlg:px-[10px] py-[4px] msm:py-[2px] text-[12px] bg-[#e5e6e6]"
              >
                Javascript
              </Badge>
              <Badge
                variant={"secondary"}
                className="rounded-full font-normal px-[15px] mlg:px-[10px] py-[4px] msm:py-[2px] text-[12px] bg-[#e5e6e6]"
              >
                golang
              </Badge>
            </CardContent>
          </Card>
          <Card className="basis-[28%] mlg:basis-[30%] msm:basis-[48%] ">
            <CardHeader className="msm:p-[1rem_1rem_1.2rem]">
              <CardTitle>Create project</CardTitle>
            </CardHeader>
            <CardContent className="msm:p-[0_1rem_1rem] flex flex-wrap justify-start gap-x-[10px] gap-y-[8px]">
              <Badge
                variant={"secondary"}
                className="rounded-full font-normal px-[15px] mlg:px-[10px] py-[4px] msm:py-[2px] text-[12px] bg-[#e5e6e6]"
              >
                Javascript
              </Badge>
              <Badge
                variant={"secondary"}
                className="rounded-full font-normal px-[15px] mlg:px-[10px] py-[4px] msm:py-[2px] text-[12px] bg-[#e5e6e6]"
              >
                golang
              </Badge>
            </CardContent>
          </Card>
          <Card className="basis-[28%] mlg:basis-[30%] msm:basis-[48%] ">
            <CardHeader className="msm:p-[1rem_1rem_1.2rem]">
              <CardTitle>Create project</CardTitle>
            </CardHeader>
            <CardContent className="msm:p-[0_1rem_1rem] flex flex-wrap justify-start gap-x-[10px] gap-y-[8px]">
              <Badge
                variant={"secondary"}
                className="rounded-full font-normal px-[15px] mlg:px-[10px] py-[4px] msm:py-[2px] text-[12px] bg-[#e5e6e6]"
              >
                Javascript
              </Badge>
              <Badge
                variant={"secondary"}
                className="rounded-full font-normal px-[15px] mlg:px-[10px] py-[4px] msm:py-[2px] text-[12px] bg-[#e5e6e6]"
              >
                golang
              </Badge>
            </CardContent>
          </Card>
          <Card className="basis-[28%] mlg:basis-[30%] msm:basis-[48%] ">
            <CardHeader className="msm:p-[1rem_1rem_1.2rem]">
              <CardTitle>Create project</CardTitle>
            </CardHeader>
            <CardContent className="msm:p-[0_1rem_1rem] flex flex-wrap justify-start gap-x-[10px] gap-y-[8px]">
              <Badge
                variant={"secondary"}
                className="rounded-full font-normal px-[15px] mlg:px-[10px] py-[4px] msm:py-[2px] text-[12px] bg-[#e5e6e6]"
              >
                Javascript
              </Badge>
              <Badge
                variant={"secondary"}
                className="rounded-full font-normal px-[15px] mlg:px-[10px] py-[4px] msm:py-[2px] text-[12px] bg-[#e5e6e6]"
              >
                golang
              </Badge>
            </CardContent>
          </Card>
          <Card className="basis-[28%] mlg:basis-[30%] msm:basis-[48%] ">
            <CardHeader className="msm:p-[1rem_1rem_1.2rem]">
              <CardTitle>Create project</CardTitle>
            </CardHeader>
            <CardContent className="msm:p-[0_1rem_1rem] flex flex-wrap justify-start gap-x-[10px] gap-y-[8px]">
              <Badge
                variant={"secondary"}
                className="rounded-full font-normal px-[15px] mlg:px-[10px] py-[4px] msm:py-[2px] text-[12px] bg-[#e5e6e6]"
              >
                Javascript
              </Badge>
              <Badge
                variant={"secondary"}
                className="rounded-full font-normal px-[15px] mlg:px-[10px] py-[4px] msm:py-[2px] text-[12px] bg-[#e5e6e6]"
              >
                golang
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WhatIKnowSection;
