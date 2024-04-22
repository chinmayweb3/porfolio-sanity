import { groq } from "next-sanity";
import { client, writeClient } from "./sanityClient";
import {
  IIntroQuery,
  IWhatIKnowQuery,
  IWorkQuery,
  IntroQuery,
  allWorkQuery,
  optionWorkQuery,
  resumeQuery,
  whatIKnowQuery,
} from "./sanityQuery";

type IIntroArg = "hero" | "work" | "contact";

export const introApi = async (q: IIntroArg): Promise<IIntroQuery> => {
  const resp = await client.fetch(IntroQuery, { q });
  return resp;
};

export const whatIKnowApi = async (): Promise<IWhatIKnowQuery> => {
  const resp = await client.fetch(whatIKnowQuery);
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

export type IContactForm = {
  name: string;
  email: string;
  description: string;
};
export const contactFormApi = async ({
  name,
  email,
  description,
}: IContactForm) => {
  const resp = await writeClient.create({
    _type: "contact",
    name,
    email,
    description,
  });
  return resp;
};
