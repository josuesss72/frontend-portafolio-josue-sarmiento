import { IStrapiResponse } from "@/types/strapi-type";
import { query } from "./strapi";
import { IProyect } from "@/types/proyect-type";

export function getProyectInfo() {
  return query("proyects?populate=*").then(
    (res: IStrapiResponse<IProyect[]>) => {
      return res;
    }
  );
}
