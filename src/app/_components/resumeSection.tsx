import { Button } from "@/components/ui/button";
import React from "react";

const ResumeSection = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-[80px] pb-[40px] bg-primary/20">
      <p className="text-t2 text-[18px] tracking-widest">
        To view the resume, click{" "}
        <Button className="px-0" variant={"link"}>
          Here
        </Button>
        .
      </p>
    </div>
  );
};

export default ResumeSection;
