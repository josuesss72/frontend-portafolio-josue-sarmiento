import { getProyectInfo } from "@/lib/get-proyect-info";
import React from "react";
import CardProyect from "./CardProyect";

const ListProyects = () => {
  return getProyectInfo()
    .then((res) => {
      return (
        <ul className="flex flex-col w-full h-full items-center gap-6 sm:flex-row sm:items-start sm:max-w-[70%]">
          {res.data.map((proyect) => {
            return <CardProyect key={proyect.id} proyect={proyect} />;
          })}
        </ul>
      );
    })
    .catch((error) => {
      console.log(error);
      return <h1>Ups! Algo a fallado</h1>;
    });
};

export default ListProyects;
