"use client";
import { IProyect } from "@/types/proyect-type";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./CardProyect.module.css";

interface IProps {
  proyect: IProyect;
}

const CardProyect = ({ proyect }: IProps) => {
  const host = process.env.NEXT_PUBLIC_STRAPI_HOST;
  const { name, url, type, images, description } = proyect;

  // ESTADOS
  const [mouseEnter, setMouseEnter] = useState(false);
  return (
    <article
      onMouseEnter={() => setMouseEnter(true)}
      onMouseLeave={() => setMouseEnter(false)}
      className={`${styles.gridTemplate} relative`}
    >
      <ul className="flex h-full">
        {images.map((image) => {
          return (
            <div className="flex w-full h-full" key={image.id}>
              <Image
                unoptimized
                className="object-fill aspect-square rounded-t-md"
                src={`${host}${image.url}`}
                width={4000}
                height={5913}
                alt=""
              />
            </div>
          );
        })}
      </ul>
      <footer className="">
        <h4 className="font-light">{name}</h4>
        <p className="text-sm">{type}</p>
      </footer>
      <article
        className={`flex flex-col gap-2 bg-black rounded-sm absolute ${
          mouseEnter ? "block" : "hidden"
        } left-[50px] top-4 p-2 text-xs w-[200px] z-50`}
      >
        {description}
        <Link className="p-2 bg-blue-300 text-black font-medium" href={url}>
          Link Proyect
        </Link>
      </article>
    </article>
  );
};

export default CardProyect;
