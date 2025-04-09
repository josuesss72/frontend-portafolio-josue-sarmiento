import { getAboutInfo } from "@/lib/get-about-info";
import getBase64Image from "@/utils/get-base64-image";
import Image from "next/image";
import React from "react";
import Content from "./components/Content";

const AboutPage = async () => {
	try {
		// OBTENEMOS LOS DATOS
		const res = await getAboutInfo();
		const { image } = res.data;
		const urlImage = `${image.url}`;
		const baseUrlImage = await getBase64Image(urlImage);

		return (
			<main className="flex flex-col items-center p-4">
				<Image
					width={150}
					height={150}
					src={urlImage}
					alt="Framed portrait of Josue Sarmiento"
					className="hover:rotate-3 transition-transform"
					placeholder="blur"
					blurDataURL={`${baseUrlImage}`}
				/>
				<Content />
			</main>
		);
	} catch (error) {
		console.log(error);
		return <div>Ups! Algo a salido mal</div>;
	}
};

export default AboutPage;
