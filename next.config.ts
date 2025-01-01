import type { NextConfig } from "next";

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
        hostname: "portafolio-nextjs-josue-production.up.railway.app",
      },
    ],
  },
};

export default nextConfig;
