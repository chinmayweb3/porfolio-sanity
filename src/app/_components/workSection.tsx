import { Button } from "@/components/ui/button";
import { introApi } from "@/lib/api";
import React from "react";

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
        <div className="flex flex-wrap justify-center gap-[10px] mt-[40px] msm:mt-[30px]">
          <button className="rounded-[40px] text-primary-foreground px-[20px] msm:px-[15px] py-[8px] text-[12px] msm:text-[10px] bg-primary ">
            All (9){" "}
          </button>
          <button className="rounded-[40px] text-primary px-[20px] msm:px-[15px] py-[8px] text-[12px] msm:text-[10px] bg-[#e5e6e6] ">
            Typescript (9){" "}
          </button>
          <button className="rounded-[40px] text-primary px-[20px] msm:px-[15px] py-[8px] text-[12px] msm:text-[10px] bg-[#e5e6e6] ">
            Golang (9){" "}
          </button>
          <button className="rounded-[40px] text-primary px-[20px] msm:px-[15px] py-[8px] text-[12px] msm:text-[10px] bg-[#e5e6e6] duration-150 xl:hover:bg-[#c8cccf] mlg:active:bg-[#c8cccf]">
            MySQL (9){" "}
          </button>
        </div>
        <ul className=" w-full grid grid-cols-3 msm:grid-cols-2 gap-[40px] mlg:gap-[25px] msm:gap-[10px] mt-[30px] px-[50px] msm:px-[20px]">
          <li className="w-full flex-flex-col">
            {/* image  */}
            <div className="w-full aspect-[2/1.3] bg-gradient-work shadow-md rounded-md "></div>
            <div className="flex flex-col px-[5px]">
              <h3 className="">title</h3>
              <p className="text-t2-lg msm:text-t2-sm text-t2-c">param</p>
              <Button variant="secondary" className="w-full mt-[5px]">
                Github
              </Button>
            </div>
          </li>
          <li className="w-full flex-flex-col">
            {/* image  */}
            <div className="w-full aspect-[2/1.3] bg-gradient-work shadow-md rounded-md "></div>
            <div className="flex flex-col px-[5px]">
              <h3 className="">title</h3>
              <p className="text-t2-lg msm:text-t2-sm text-t2-c">param</p>
              <Button variant="secondary" className="w-full mt-[5px]">
                Github
              </Button>
            </div>
          </li>
          <li className="w-full flex-flex-col">
            {/* image  */}
            <div className="w-full aspect-[2/1.3] bg-gradient-work shadow-md rounded-md "></div>
            <div className="flex flex-col px-[5px]">
              <h3 className="">title</h3>
              <p className="text-t2-lg msm:text-t2-sm text-t2-c">param</p>
              <Button variant="secondary" className="w-full mt-[5px]">
                Github
              </Button>
            </div>
          </li>
          <li className="w-full flex-flex-col">
            {/* image  */}
            <div className="w-full aspect-[2/1.3] bg-gradient-work shadow-md rounded-md "></div>
            <div className="flex flex-col px-[5px]">
              <h3 className="">title</h3>
              <p className="text-t2-lg msm:text-t2-sm text-t2-c">param</p>
              <Button variant="secondary" className="w-full mt-[5px]">
                Github
              </Button>
            </div>
          </li>
          <li className="w-full flex-flex-col">
            {/* image  */}
            <div className="w-full aspect-[2/1.3] bg-gradient-work shadow-md rounded-md "></div>
            <div className="flex flex-col px-[5px]">
              <h3 className="">title</h3>
              <p className="text-t2-lg msm:text-t2-sm text-t2-c">param</p>
              <Button variant="secondary" className="w-full mt-[5px]">
                Github
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkSection;
