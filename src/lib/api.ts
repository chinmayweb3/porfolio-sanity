import { groq } from "next-sanity";
import { client } from "./sanityClient";
import {
  IIntroQuery,
  IWorkQuery,
  IntroQuery,
  allWorkQuery,
  optionWorkQuery,
  resumeQuery,
} from "./sanityQuery";

type IIntroArg = "hero" | "work" | "contact";

export const introApi = async (q: IIntroArg): Promise<IIntroQuery> => {
  const resp = await client.fetch(IntroQuery, { q });
  return resp;
};

export const workApi = async (q: string): Promise<IWorkQuery> => {
  if ("all" == q) {
    const resp = await client.fetch(allWorkQuery);
    return resp;
  } else {
    const resp = await client.fetch(optionWorkQuery, { q });
    return resp;
  }
};

export const resumeApi = async (): Promise<{ resume: string }> => {
  const resp = await client.fetch(resumeQuery);
  return resp;
};
