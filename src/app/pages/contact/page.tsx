import { getContactInfo } from "@/lib/get-contact-info";
import getBase64Image from "@/utils/get-base64-image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ContactPage = async () => {
  try {
    const host = process.env.NEXT_PUBLIC_STRAPI_HOST;
    // Obtener datos desde el servidor
    const res = await getContactInfo();
    const { image, socials } = res.data;

    const urlImage = `${host}${image.url}`;
    const base64Image = await getBase64Image(urlImage);

    return (
      <main className="flex flex-col sm:flex-row sm:justify-between">
        <article>
          <Image
            className="hidden sm:block"
            width={128}
            height={226}
            alt=""
            src={urlImage}
            placeholder="blur"
            blurDataURL={base64Image}
          />
        </article>
        <ul className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 mx-auto">
          {socials.map((social) => {
            const { icon, name, id, color, colorText, url } = social;
            return (
              <Link
                key={id}
                style={{ background: color }}
                className="flex p-4 gap-4 cursor-pointer items-center w-[200px]"
                href={`${url}`}
              >
                <Image
                  width={30}
                  height={30}
                  alt="icon of net social"
                  src={`${host}${icon.url}`}
                />
                <h4 style={{ color: colorText }} className={`text-sm`}>
                  {name}
                </h4>
              </Link>
            );
          })}
        </ul>
      </main>
    );
  } catch (error) {
    console.log(error);
    return <div>Ups! algo a fallado</div>;
  }
};

export default ContactPage;
