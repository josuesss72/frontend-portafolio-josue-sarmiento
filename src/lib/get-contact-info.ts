import { IStrapiResponse } from "@/types/strapi-type";
import { query } from "./strapi";
import { IContact } from "@/types/contact.type";

export function getContactInfo() {
  return query("contact?populate[socials][populate]=icon&populate=image").then(
    (res: IStrapiResponse<IContact>) => {
      return res;
    }
  );
}
