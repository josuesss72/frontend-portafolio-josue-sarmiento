import { getAboutInfo } from "@/lib/get-about-info";
import getBase64Image from "@/utils/get-base64-image";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return getAboutInfo().then(async (res) => {
    const { title, image, description } = res.data;
    const host = process.env.NEXT_PUBLIC_STRAPI_HOST;
    const urlImage = `${host}${image.url}`;
    const baseUrlImage = await getBase64Image(urlImage);
    return (
      <main className="flex flex-col items-center p-4">
        <Image
          width={150}
          height={150}
          src={urlImage}
          alt="Framed portrait of Josue Sarmiento"
          className=""
          placeholder="blur"
          blurDataURL={`${baseUrlImage}`}
        />
        <h2 className="text-2xl font-bold text-yellow-500 mt-4">{title}</h2>
        <div className="flex mt-8">
          <section className="max-w-2xl px-4">
            <p className="text-white text-sm font-thin">{description}</p>
          </section>
        </div>
      </main>
    );
  });
};

export default AboutPage;
