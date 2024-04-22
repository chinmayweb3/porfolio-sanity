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
    "id":_id,
    "title":projectname,
    "url":projectimage.asset->url,
    "link":githublink,
    "workFilter" :tech[]->{
      name
    }
  },
  
  "filters":*[_type=="workfilter"]{
    "id":_id,
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
  id: string;
  title: string;
  url: string;
  link: string;
  workFilter: IWorkFilter[];
};
type IWorkFilter = {
  id: string;
  name: string;
  count: number;
};

export const optionWorkQuery = groq`{
  "allCounts":count(*[_type=="workcard"]),

  "techs":*[_type=="workcard" && $q in tech[]->name]{
    "id":_id,
    "title":projectname,
    "url":projectimage.asset->url,
    "link":githublink,
    "workFilter" :tech[]->{
      name
    }
  },
  
  "filters":*[_type=="workfilter"]{
    "id":_id,
    name,
    "count":count(*[_type=="workcard" && ^._id in tech[]->_id])
  }
}`;

export const resumeQuery = groq`*[_type=="resume"][0]{
  "resume":resume.asset->url
}`;

export type IWhatIKnowQuery = {
  intro: IIntroQuery;
  iknow: IWhatIKnowCard[];
};
type IWhatIKnowCard = {
  id: string;
  title: string;
  tech: string[];
};

export const whatIKnowQuery = groq`{
  "intro":*[_type=="alltitle" && name=="iknow"][0]{
      title,
      para
  },
  
  "iknow":*[_type=="whatiknow"]{
      "id":_id,
      title,
      tech
    }
}
`;
