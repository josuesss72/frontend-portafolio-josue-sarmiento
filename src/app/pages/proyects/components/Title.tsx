"use client";
import { translations } from "@/app/translation";
import { useLanguage } from "@/store/useLanguage";
import React from "react";

const Title = () => {
	const { language } = useLanguage();
	const t = translations[language].pageProjects;
	return <h1 className="text-white p-4">{t.title}</h1>;
};

export default Title;
