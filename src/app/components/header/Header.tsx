import React from "react";
import { getHeaderInfo } from "@/lib/get-header-info";
import Logo from "../logo/Logo";
import Nav from "./components/Nav";
import ButtonTranslate from "./components/ButtonTranslate";

const Header = async () => {
	return getHeaderInfo().then((res) => {
		const { title, logo, subtitle } = res.data;
		return (
			<header className="w-full flex flex-col gap-4 justify-between items-center bg-black text-white sm:flex-row md:flex-row">
				<div className="flex items-center">
					<Logo images={logo} />
					<h1 className="text-lg font-bold">
						{title} <span className="text-yellow-500">{subtitle}</span>
					</h1>
				</div>
				<Nav />
				<ButtonTranslate />
			</header>
		);
	});
};

export default Header;
