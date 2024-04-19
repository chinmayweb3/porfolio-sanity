import { client } from "./sanityClient";
import { IHeroQuery, heroQuery } from "./sanityQuery";

export const heroApi = async (): Promise<any> => {
  const resp = await client.fetch(heroQuery);
  return resp;
};
