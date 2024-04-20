import { groq } from "next-sanity";

export type IIntroQuery = {
  imageurl: string;
  title: { children: { text: string }[] }[];
  para: { children: { text: string }[] }[];
};

export const IntroQuery = groq`*[_type=="alltitle" && name==$q][0]{
    title,
    "imageurl":profileimage.asset->url,
    para
  }`;
