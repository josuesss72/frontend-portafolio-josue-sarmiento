import { IStrapiResponse } from "@/types/strapi-type";
import { query } from "./strapi";
import { IProyectPage } from "@/types/proyect-type";

export function getProyectPage() {
  return query("proyects-page?populate=*").then(
    (res: IStrapiResponse<IProyectPage>) => {
      return res;
    }
  );
}
