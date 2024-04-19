import { client } from "./sanityClient";
import { IHeroQuery, heroQuery } from "./sanityQuery";

export const heroApi = async (): Promise<IHeroQuery> => {
  const resp = await client.fetch(heroQuery);
  return resp;
};
