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

export const work = groq`*[_type=="workcard"]{
    "title":projectname,
    "url":projectimage.asset->url,
    "workfilter" :tech[]->{
      name
    }
  }`;

export const allWorkQuery = groq`{
  "allCounts":count(*[_type=="workcard"]),

  "techs":*[_type=="workcard"]{
    "title":projectname,
    "url":projectimage.asset->url,
    "link":githublink,
    "workFilter" :tech[]->{
      name
    }
  },
  
  "filters":*[_type=="workfilter"]{
    name,
    "count":count(*[_type=="workcard" && ^._id in tech[]->_id])
  }
}`;

export type IWorkQuery = {
  allCounts: number;
  techs: IWorkCard[];
  filters: IWorkFilter[];
};
type IWorkCard = {
  title: string;
  url: string;
  link: string;
  workFilter: IWorkFilter[];
};
type IWorkFilter = {
  name: string;
  count: number;
};

export const optionWorkQuery = groq`{
  "allCounts":count(*[_type=="workcard"]),

  "techs":*[_type=="workcard" && $q in tech[]->name]{
    "title":projectname,
    "url":projectimage.asset->url,
    "link":githublink,
    "workFilter" :tech[]->{
      name
    }
  },
  
  "filters":*[_type=="workfilter"]{
    name,
    "count":count(*[_type=="workcard" && ^._id in tech[]->_id])
  }
}`;

export const resumeQuery = groq`*[_type=="resume"][0]{
  "resume":resume.asset->url
}`;
