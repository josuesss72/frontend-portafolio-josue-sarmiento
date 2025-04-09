"use client";

import { translations } from "@/app/translation";
import { useLanguage } from "@/store/useLanguage";
import Link from "next/link";
import { usePathname } from "next/navigation";

// interface Props {
//   nav: {
//     id: number;
//     name: string;
//     path: string;
//   }[];
// }

const Nav = () => {
	// CONSTANTES
	const currentPathPage = usePathname().slice(6);

	const { language } = useLanguage();
	const t = translations[language].header;

	return (
		<nav className="flex space-x-6 items-center">
			{t.nav.map((item) => {
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
				href={`https://drive.google.com/file/d/1CYXfs-4hsRC36nS_8_xEc6orNKGm2H18/view?usp=sharing`}
				download
				className="bg-gray-700 hover:bg-gray-600 text-sm text-white py-2 px-2 rounded"
			>
				{t.botton}
			</a>
		</nav>
	);
};

export default Nav;
