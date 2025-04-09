"use client";
import { IHome } from "@/types/home-type";
import { IStrapiResponse } from "@/types/strapi-type";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.css";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/store/useLanguage";
import { translations } from "@/app/translation";

interface IProps {
	res: IStrapiResponse<IHome>;
}

const ImageTextAnimate = ({ res }: IProps) => {
	const { language } = useLanguage();
	const t = translations[language];
	const router = useRouter();
	const { image } = res.data;

	// STYLES VARIABLES
	const subtitleClass = "text-2xl font-medium md:text-3xl";
	const titleClass = "text-4xl font-medium ml-2 md:text-6xl";

	const animationFade = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
	};

	console.log(image.url);

	useEffect(() => {
		setTimeout(() => {
			router.push("/pages/about");
		}, 4300);
	}, [router]);

	return (
		<>
			<motion.div
				initial={animationFade.initial}
				animate={animationFade.animate}
				transition={{ duration: 1 }}
				className="flex w-[200px] md:w-[250px]"
			>
				<Image
					className={`w-full h-auto aspect-square ${styles.maskImage}`}
					width={128}
					height={128}
					alt=""
					src={`${image.url}`}
				/>
			</motion.div>
			<article className="flex flex-col">
				<motion.h2
					initial={animationFade.initial}
					animate={animationFade.animate}
					transition={{ duration: 1, delay: 1 }}
					className={subtitleClass}
				>
					{t.pageLoading.text}
				</motion.h2>
				<motion.h1
					initial={animationFade.initial}
					animate={animationFade.animate}
					transition={{ duration: 1, delay: 2 }}
					className={titleClass}
				>
					{t.pageLoading.title}
				</motion.h1>
				<motion.section
					initial={animationFade.initial}
					animate={animationFade.animate}
					transition={{ duration: 1, delay: 3 }}
					className="flex items-center gap-2 ml-auto md:ml-0"
				>
					<h2 className={`${subtitleClass} text-yellow-200`}>
						{t.pageLoading.subtitle.slice(0, 10)}
					</h2>
					<h2 className={`${subtitleClass} text-yellow-500`}>
						{t.pageLoading.subtitle.slice(10)}
					</h2>
				</motion.section>
			</article>
		</>
	);
};

export default ImageTextAnimate;
