import { IIdentifiers } from "./strapi-type";

export interface IAbout extends IIdentifiers {
  title: string;
  description: string;
  image: {
    id: number;
    url: string;
  };
}
