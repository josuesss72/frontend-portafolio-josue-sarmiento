import { IIdentifiers } from "./strapi-type";

interface IRedSocial {
  id: number;
  name: string;
  icon: {
    id: number;
    url: string;
  };
  color: string;
  colorText: string;
  url: string;
}

export interface IContact extends IIdentifiers {
  image: {
    id: number;
    url: string;
  };
  socials: IRedSocial[];
}
