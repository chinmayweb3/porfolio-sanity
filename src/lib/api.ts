import { client } from "./sanityClient";
import { IIntroQuery, IntroQuery } from "./sanityQuery";

export const introApi = async (
  q: "hero" | "work" | "contact"
): Promise<IIntroQuery> => {
  const resp = await client.fetch(IntroQuery, { q });
  return resp;
};
