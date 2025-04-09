"use client";
import { translations } from "@/app/translation";
import { useLanguage } from "@/store/useLanguage";
import React from "react";

const Content = () => {
	const { language } = useLanguage();
	const t = translations[language].pageAbout;
	return (
		<div>
			<h2 className="text-2xl font-bold text-yellow-500 mt-4 text-center">
				{t.title}
			</h2>
			<div className="flex mt-8">
				<section className="max-w-2xl px-4 text-white">
					<p className="text-lg font-thin text-center mb-2">{t.im}</p>
					<p className="text-sm font-thin mb-4">{t.desc1}</p>
					<ul className="ml-4 mb-4 flex gap-2 flex-wrap border-[1px] border-gray-700 rounded-sm p-2">
						{t.skills.map((skill, index) => (
							<li className="text-md bold" key={index}>
								{skill}
							</li>
						))}
					</ul>
					<p className="text-sm font-thin mb-4">{t.desc2}</p>
					<ul className="ml-4 mb-4 flex gap-2 flex-wrap border-[1px] border-gray-700 rounded-sm justify-between p-2">
						{t.innovatives.map((inno, index) => (
							<li className="text-md bold" key={index}>
								{inno}
							</li>
						))}
					</ul>
					<p className="text-sm font-thin mb-4">{t.desc3}</p>
					<ul className="ml-4 mb-4 flex gap-2 flex-wrap border-[1px] border-gray-700 rounded-sm justify-between p-2">
						{t.abilities.map((abi, index) => (
							<li className="text-md bold" key={index}>
								{abi}
							</li>
						))}
					</ul>
					<p className="text-sm font-thin mb-4">{t.desc4}</p>
					<ul className="ml-4 mb-4 flex gap-2 flex-wrap border-[1px] border-gray-700 rounded-sm justify-between p-2">
						{t.guarantees.map((guar, index) => (
							<li className="text-md bold" key={index}>
								{guar}
							</li>
						))}
					</ul>
					<p className="text-sm font-thin">{t.desc5}</p>
				</section>
			</div>
		</div>
	);
};

export default Content;
