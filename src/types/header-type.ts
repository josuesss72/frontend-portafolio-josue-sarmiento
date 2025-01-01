import { IIdentifiers } from "./strapi-type";

export interface IHeader extends IIdentifiers {
  title: string;
  subtitle: string;
  nav: {
    id: number;
    name: string;
    path: string;
  }[];
  logo: {
    id: number;
    url: string;
  }[];
}
