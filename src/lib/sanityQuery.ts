import { groq } from "next-sanity";

export type IHeroQuery = {
  imageurl: string;
  title: { children: { text: string }[] }[];
  para: { children: { text: string }[] }[];
};

export const heroQuery = groq`*[_type=="alltitle"][0]{
    title,
    "imageurl":profileimage.asset->url,
    para
  }`;
