import { groq } from "next-sanity";

export type IHeroQuery = {
  imageurl: string;
  title: { children: { text: string }[] }[];
  para: { children: { text: string }[] }[];
};

export type IIntroQuery = {
  title: { children: { text: string }[] }[];
  para: { children: { text: string }[] }[];
};

export const heroQuery = groq`*[_type=="alltitle" && name=="hero"][0]{
    title,
    "imageurl":profileimage.asset->url,
    para
  }`;

export const workQuery = groq`*[_type=="alltitle" && name=="work"][0]{
    title,
    para
  }`;

export const contactQuery = groq`*[_type=="alltitle"&& name=="contact"][0]{
    title,
    para
  }`;
