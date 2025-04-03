import { getProyectInfo } from "@/lib/get-proyect-info";
import React from "react";
import CardProyect from "./CardProyect";

const ListProyects = () => {
	const proyects = getProyectInfo();
	return (
		<ul className="flex flex-col w-full h-full items-center gap-6 sm:flex-row sm:items-start sm:max-w-[70%]">
			{proyects.map((proyect) => {
				return <CardProyect key={proyect.id} proyect={proyect} />;
			})}
		</ul>
	);
};

export default ListProyects;
