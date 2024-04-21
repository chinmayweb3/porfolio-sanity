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
      </div>
    </div>
  );
};

export default WhatIKnowSection;
