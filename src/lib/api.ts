export const runtime = "edge";

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
  const resp = await client.fetch(
    IntroQuery,
    { q },
    {
      next: {
        revalidate: 0,
      },
    }
  );
  return resp;
};

export const whatIKnowApi = async (): Promise<IWhatIKnowQuery> => {
  const resp = await client.fetch(
    whatIKnowQuery,
    {},
    {
      next: {
        revalidate: 0,
      },
    }
  );
  return resp;
};

export const workApi = async (q: string): Promise<IWorkQuery> => {
  if ("all" == q) {
    const resp = await client.fetch(
      allWorkQuery,
      {},
      {
        next: {
          revalidate: 0,
        },
      }
    );
    return resp;
  } else {
    const resp = await client.fetch(
      optionWorkQuery,
      { q },
      {
        next: {
          revalidate: 0,
        },
      }
    );
    return resp;
  }
};

export const resumeApi = async (): Promise<{ resume: string }> => {
  const resp = await client.fetch(
    resumeQuery,
    {},
    {
      next: {
        revalidate: 0,
      },
    }
  );
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
