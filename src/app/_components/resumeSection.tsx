import { Button } from "@/components/ui/button";
import { resumeApi } from "@/lib/api";
import React from "react";

export const revalidate = 3600; // revalidate at most every hour

const ResumeSection = async () => {
  const resp = await resumeApi();

  return (
    <div
      id="resume"
      className="flex mt-[75px] mlg:mt-[50px] msm:mt-[30px] flex-col justify-center items-center pt-[80px] pb-[40px] bg-primary/20"
    >
      <p className="text-t2 text-[18px] tracking-widest">
        To view the resume, click{" "}
        {resp?.resume && (
          <a aria-label="resume Link" href={resp.resume} target="_blank">
            <Button className="px-0 text-destructive" variant={"link"}>
              Here
            </Button>
          </a>
        )}
        .
      </p>
    </div>
  );
};

export default ResumeSection;
