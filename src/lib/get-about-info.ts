import { IStrapiResponse } from "@/types/strapi-type";
import { query } from "./strapi";
import { IAbout } from "@/types/about-type";

export function getAboutInfo() {
  return query("about?populate=*").then((res: IStrapiResponse<IAbout>) => {
    return res;
  });
}
