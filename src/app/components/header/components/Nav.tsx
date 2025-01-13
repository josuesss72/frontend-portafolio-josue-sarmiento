"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  nav: {
    id: number;
    name: string;
    path: string;
  }[];
}

const Nav = ({ nav }: Props) => {
  // CONSTANTES
  const currentPathPage = usePathname().slice(6);
  const host = process.env.NEXT_PUBLIC_STRAPI_HOST;

  return (
    <nav className="flex space-x-6 items-center">
      {nav.map((item) => {
        return (
          <Link
            key={item.id}
            href={`/pages${item.path}`}
            className={`hover:text-yellow-500 text-sm ${
              item.path === currentPathPage && "text-yellow-500"
            }`}
          >
            {item.name}
          </Link>
        );
      })}
      <a
        href={`${host}/uploads/Curriculum_en_ingles_5b033d9286.pdf`}
        download
        className="bg-gray-700 hover:bg-gray-600 text-sm text-white py-2 px-2 rounded"
      >
        Download CV
      </a>
    </nav>
  );
};

export default Nav;
