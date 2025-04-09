import type { NextConfig } from "next";
import { i18n } from "./next-i18next.config";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "1337", // Asegúrate de que el puerto coincide con el de tu Strapi
				pathname: "/uploads/**", // Asegúrate de que coincide con la estructura de tus URLs
			},
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
			},
		],
	},
	i18n: i18n.i18n,
};

export default nextConfig;
