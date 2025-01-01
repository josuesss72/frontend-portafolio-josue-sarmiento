import { query } from "./strapi";
import { IHeader } from "@/types/header-type";
import { IStrapiResponse } from "@/types/strapi-type";

export function getHeaderInfo() {
  return query("header?populate=*").then((res: IStrapiResponse<IHeader>) => {
    return res;
  });
}
