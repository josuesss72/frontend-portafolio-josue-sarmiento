import { IStrapiResponse } from "@/types/strapi-type";
import { query } from "./strapi";
import { IHome } from "@/types/home-type";

export function getHomePage() {
  return query("home?populate=*").then((res: IStrapiResponse<IHome>) => {
    return res;
  });
}
