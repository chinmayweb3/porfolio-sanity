"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { workApi } from "@/lib/api";
import { IWorkQuery } from "@/lib/sanityQuery";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const WorkData = () => {
  const [filter, setFilter] = useState<string>("all");
  const [options, setOptions] = useState<IWorkQuery>();

  useEffect(() => {
    (async () => {
      const resp = await workApi(filter);
      setOptions(resp);
    })();
  }, [filter]);

  return (
    <>
      <WorkFilter options={options} filter={filter} setFilter={setFilter} />
      <WorkCard options={options} />
    </>
  );
};

const WorkFilter = ({
  options,
  filter,
  setFilter,
}: {
  options: IWorkQuery | undefined;
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}) => {
  if (!options?.allCounts) {
    return <></>;
  }
  return (
    <div className="flex flex-wrap justify-center gap-[10px] msm:gap-y-[5px] mt-[40px] msm:mt-[30px]">
      <button
        onClick={() => "all" !== filter && setFilter("all")}
        className={`rounded-[40px] px-[20px] msm:px-[10px] py-[8px] msm:py-[5px] text-[12px] msm:text-[10px] ${
          "all" === filter
            ? `bg-primary text-primary-foreground ${
                "all" === filter ? "cursor-default" : ""
              }`
            : "bg-[#e5e6e6] text-primary duration-150 xl:hover:bg-[#c8cccf] hover:shadow-sm mlg:active:bg-[#c8cccf]"
        } `}
      >
        All ({options?.allCounts})
      </button>

      {options?.filters &&
        options.filters.map((item) => (
          <button
            onClick={() => item.name !== filter && setFilter(item.name)}
            key={item.id}
            className={`rounded-[40px] px-[20px] msm:px-[10px] py-[8px] msm:py-[5px] text-[12px] msm:text-[10px] ${
              filter == item.name
                ? `bg-primary text-primary-foreground ${
                    item.name === filter ? "cursor-default" : ""
                  }`
                : "bg-[#e5e6e6] text-primary duration-150 xl:hover:bg-[#c8cccf] hover:shadow-sm mlg:active:bg-[#c8cccf]"
            } `}
          >
            {item.name} ({item.count})
          </button>
        ))}
    </div>
  );
};

const WorkCard = ({ options }: { options: IWorkQuery | undefined }) => {
  return (
    <ul className=" w-full grid grid-cols-3 msm:grid-cols-2 gap-[40px] mlg:gap-[25px] msm:gap-[10px] mt-[30px] px-[50px] msm:px-[20px]">
      {options?.techs &&
        options.techs.map((item) => (
          <li key={item.id} className="w-full flex flex-col">
            <div className="w-full bg-gradient-work shadow-lg rounded-md p-[15px] msm:p-[10px]">
              <div className="w-full aspect-[2/1.3] h-full overflow-hidden rounded-md shadow-md">
                <Image
                  className="w-full h-full hover:scale-105 duration-150 object-cover"
                  src={item.url}
                  alt={item.title}
                  width={200}
                  height={100}
                />
              </div>
            </div>
            <div className="flex sm:flex-grow flex-col px-[5px]">
              <h3 className="pt-[4px]">{item.title}</h3>
              <div className="sm:flex-grow flex flex-wrap gap-[5px] py-[3px]">
                {item.workFilter.map((i) => (
                  <>
                    {/* <Badge
                      className="rounded-full h-min text-[10px] msm:text-[8px] msm:px-[6px] font-normal"
                      key={i.id + i.name}
                      variant={"secondary"}
                    >
                      {i.name}
                    </Badge> */}
                    <div
                      key={i.id + Image.name}
                      className="rounded-full flex justify-center items-center bg-secondary text-secondary-foreground h-min text-[10px] msm:text-[8px] px-[6px] border-[1px] border-border py-[2px] font-normal"
                    >
                      {i.name}
                    </div>
                  </>
                ))}
              </div>
              <a className="mt-[5px]" href={item.link} target="_blank">
                <Button
                  variant="secondary"
                  className="w-full xl:hover:shadow-sm duration-150 xl:hover:bg-[#e8e8e8]"
                >
                  Github
                </Button>
              </a>
            </div>
          </li>
        ))}
    </ul>
  );
};
