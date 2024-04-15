import { Button } from "@/components/ui/button";
import React from "react";

const WorkSection = () => {
  return (
    <div className="w-full  contain-in-section pb-[150px]">
      <div className="flex flex-col items-center">
        <h2 className="font-extrabold text-t-lg">Work</h2>
        <p className="text-t2-lg text-t2-c text-center leading-tight">
          Check my commercial and non commercial projects. <br /> If you have any questions feel free to ask me for more information.
        </p>
        <div className="flex gap-[10px] mt-[50px]">
          <button className="rounded-[40px] text-primary-foreground px-[20px] py-[8px] text-[12px] bg-primary ">All (9) </button>
          <button className="rounded-[40px] text-primary px-[20px] py-[8px] text-[12px] bg-[#d4d8db] ">Typescript (9) </button>
          <button className="rounded-[40px] text-primary px-[20px] py-[8px] text-[12px] bg-[#d8dbdd] ">Golang (9) </button>
          <button className="rounded-[40px] text-primary px-[20px] py-[8px] text-[12px] bg-[#d4d8db] duration-150 hover:bg-[#c8cccf]">
            MySQL (9){" "}
          </button>
        </div>
        <ul className=" w-full grid grid-cols-3 gap-[40px] mt-[30px] px-[50px]">
          <li className="w-full flex-flex-col">
            {/* image  */}
            <div className="w-full aspect-[2/1.3] bg-t2-c rounded-md "></div>
            <h3>title</h3>
            <p>param</p>
          </li>
          <li className="w-full flex-flex-col">
            {/* image  */}
            <div className="w-full aspect-[2/1.3] bg-t2-c rounded-md "></div>
            <h3>title</h3>
            <p>param</p>
          </li>
          <li className="w-full flex-flex-col">
            {/* image  */}
            <div className="w-full aspect-[2/1.3] bg-t2-c rounded-md "></div>
            <h3>title</h3>
            <p>param</p>
          </li>
          <li className="w-full flex-flex-col">
            {/* image  */}
            <div className="w-full aspect-[2/1.3] bg-t2-c rounded-md "></div>
            <h3>title</h3>
            <p>param</p>
          </li>
          <li className="w-full flex-flex-col">
            {/* image  */}
            <div className="w-full aspect-[2/1.3] bg-t2-c rounded-md "></div>
            <h3>title</h3>
            <p>param</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorkSection;
