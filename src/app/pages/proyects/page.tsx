import { getProyectPage } from "@/lib/get-proyect-page";
import { IProyectPage } from "@/types/proyect-type";
import Image from "next/image";
import React from "react";
import ListProyects from "./components/ListProyects";
import Title from "./components/Title";

const ProyectsPage = async () => {
	try {
		// OBTENEMOS LOS DATOS
		const res = await getProyectPage();
		const { image } = res.data as IProyectPage;

		return (
			<main className="">
				<Title />
				<article className="flex">
					<ListProyects />
					<Image
						className="hidden sm:block sm:ml-auto sm:h-[350px] sm:w-[140px]"
						src={`${image.url}`}
						width={128}
						height={424}
						alt=""
					/>
				</article>
			</main>
		);
	} catch (error) {
		console.log(error);
		return <div>Ups! Algo a salido mal</div>;
	}
};

export default ProyectsPage;
