"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface Props {
  nav: {
    id: number;
    name: string;
    path: string;
  }[];
}

const Nav = ({ nav }: Props) => {
  const currentPathPage = usePathname().slice(6)

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
      <button className="bg-gray-700 hover:bg-gray-600 text-sm text-white py-2 px-2 rounded">
        Download CV
      </button>
    </nav>
  );
};

export default Nav;
