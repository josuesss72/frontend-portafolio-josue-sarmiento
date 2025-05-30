import { IIdentifiers } from "./strapi-type";

interface IImage {
	id: number;
	url: string;
}

export interface IProyect {
	id: number;
	name: string;
	images: IImage[];
	type: string;
	inProcess: boolean;
	url: string;
	description: string;
	github: string;
}

export interface IProyectPage extends IIdentifiers {
	title: string;
	image: IImage;
}
