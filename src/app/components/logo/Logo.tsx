"use client";
import Image from "next/image";
import React, { useState } from "react";

interface Props {
  images: {
    id: number;
    url: string;
  }[];
}

console.log()

const Logo = ({ images }: Props) => {
  const [isMouseEnter, setIsMauseEnter] = useState(false);
  const baseURL = process.env.NEXT_PUBLIC_STRAPI_HOST

  return (
    <article
      onMouseEnter={() => setIsMauseEnter(true)}
      onMouseLeave={() => setIsMauseEnter(false)}
      className="flex items-center mr-4"
    >
      {isMouseEnter ? (
        <Image
          width={40}
          height={40}
          src={`${baseURL}${images[1].url}`}
          alt="Avatar of Josue Sarmiento"
          className="rounded-full"
        />
      ) : (
        <Image
          width={40}
          height={40}
          src={`${baseURL}${images[0].url}`}
          alt="Avatar of Josue Sarmiento"
          className="rounded-full z-50"
        />
      )}
    </article>
  );
};

export default Logo;
