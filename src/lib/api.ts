import { client } from "./sanityClient";
import {
  IHeroQuery,
  IIntroQuery,
  contactQuery,
  heroQuery,
  workQuery,
} from "./sanityQuery";

export const heroApi = async (): Promise<IHeroQuery> => {
  const resp = await client.fetch(heroQuery);
  return resp;
};

export const workApi = async (): Promise<IIntroQuery> => {
  const resp = await client.fetch(workQuery);
  return resp;
};
export const contactApi = async (): Promise<IIntroQuery> => {
  const resp = await client.fetch(contactQuery);
  return resp;
};
