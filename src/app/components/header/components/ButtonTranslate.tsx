"use client";
import React from "react";
import { useLanguage } from "@/store/useLanguage";

const ButtonTranslate = () => {
	const { language, toggleLanguage } = useLanguage();

	return (
		<div>
			<button onClick={toggleLanguage}>
				{language === "en" ? "ES es" : "EN us"}
			</button>
		</div>
	);
};

export default ButtonTranslate;
