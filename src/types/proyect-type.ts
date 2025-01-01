import { IIdentifiers } from "./strapi-type";

interface IImage {
  id: number;
  url: string;
}

export interface IProyect extends IIdentifiers {
  name: string;
  images: IImage[];
  type: string;
  inProcess: boolean;
  url: string;
  description: string;
}

export interface IProyectPage extends IIdentifiers {
  title: string;
  image: IImage;
}
