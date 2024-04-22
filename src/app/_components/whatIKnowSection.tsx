import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { whatIKnowApi } from "@/lib/api";
import React from "react";

export const runtime = "edge";

// export const revalidate = 10; // revalidate at most every hour

const WhatIKnowSection = async () => {
  const resp = await whatIKnowApi();

  return (
    <div
      id="whatiknow"
      className="w-full contain-in-section py-[75px] mlg:py-[50px] msm:py-[30px]"
    >
      <div className="flex flex-col items-center">
        <h2
          dangerouslySetInnerHTML={{
            __html: resp.intro.title[0].children
              .map((c: any) => c.text)
              .join(""),
          }}
          className="font-extrabold text-t-lg mlg:text-t-md msm:text-t-sm"
        >
          {/* What I Know */}
        </h2>
        <p
          dangerouslySetInnerHTML={{
            __html: resp.intro.para[0].children
              .map((child: any) => child.text)
              .join(""),
          }}
          className="text-t2-lg msm:text-t2-sm text-t2-c text-center leading-tight"
        >
          {/* Check my commercial and non commercial projects. <br /> If you have
          any questions feel free to ask me for more information. */}
        </p>
        <div className="flex flex-wrap justify-center gap-[10px] mt-[40px] msm:mt-[30px] w-full">
          {resp?.iknow &&
            resp.iknow.map((item) => (
              <Card
                key={item.id}
                className="basis-[28%] mlg:basis-[30%] msm:basis-[48%] "
              >
                <CardHeader className="msm:p-[1rem_1rem_1.2rem]">
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="msm:p-[0_1rem_1rem] flex flex-wrap justify-start gap-x-[10px] gap-y-[8px]">
                  {item?.tech &&
                    item.tech.map((tech) => (
                      <Badge
                        key={item.id + tech}
                        variant={"secondary"}
                        className="rounded-full font-normal px-[15px] mlg:px-[10px] py-[4px] msm:py-[2px] text-[12px] bg-[#e5e6e6]"
                      >
                        {tech}
                      </Badge>
                    ))}
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIKnowSection;
