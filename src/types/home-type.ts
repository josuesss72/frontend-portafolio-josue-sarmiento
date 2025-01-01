import { IIdentifiers } from "./strapi-type";

export interface IHome extends IIdentifiers {
  primaryText: string;
  segundaryText: string;
  terciaryText: string;
  terciaryText2: string;
  image: {
    id: number;
    url: string;
  };
}
