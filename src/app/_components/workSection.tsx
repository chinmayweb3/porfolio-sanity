import { introApi } from "@/lib/api";
import React from "react";
import { WorkData } from "./workData";

export const revalidate = 3600; // revalidate at most every hour

const WorkSection = async () => {
  const resp = await introApi("work");

  return (
    <div
      id="work"
      className="w-full  contain-in-section py-[75px] mlg:py-[50px] msm:py-[30px]"
    >
      <div className="flex flex-col items-center">
        <h2
          dangerouslySetInnerHTML={{
            __html: resp.title[0].children.map((c: any) => c.text).join(""),
          }}
          className="font-extrabold text-t-lg mlg:text-t-md msm:text-t-sm"
        >
          {/* Work */}
        </h2>
        <p
          dangerouslySetInnerHTML={{
            __html: resp.para[0].children
              .map((child: any) => child.text)
              .join(""),
          }}
          className="text-t2-lg msm:text-t2-sm text-t2-c text-center leading-tight"
        >
          {/* Check my commercial and non commercial projects. <br /> If you have
          any questions feel free to ask me for more information. */}
        </p>

        <WorkData />
      </div>
    </div>
  );
};

export default WorkSection;
