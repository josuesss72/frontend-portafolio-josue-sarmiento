import { getProyectPage } from "@/lib/get-proyect-page";
import { IProyectPage } from "@/types/proyect-type";
import Image from "next/image";
import React from "react";
import ListProyects from "./components/ListProyects";

const ProyectsPage = async () => {
  try {
    const host = process.env.NEXT_PUBLIC_STRAPI_HOST;

    // OBTENEMOS LOS DATOS
    const res = await getProyectPage();
    const { title, image } = res.data as IProyectPage;

    return (
      <main className="">
        <h1 className="text-white p-4">{title}</h1>

        <article className="flex">
          <ListProyects />
          <Image
            className="hidden sm:block sm:ml-auto"
            src={`${host}${image.url}`}
            width={128}
            height={248}
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
