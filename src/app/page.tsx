import { getHomePage } from "@/lib/get-home-page";
import ImageTextAnimate from "./components/home/image-text-animate/ImageTextAnimate";

export default async function Home() {
	try {
		// OBTENEMOS LOS DATOS
		const res = await getHomePage();

		return (
			<main className="flex flex-col gap-6 items-center justify-center h-screen md:flex-row">
				<ImageTextAnimate res={res} />
			</main>
		);
	} catch (error) {
		console.log(error);
		return <div>Ups! Algo a salido mal</div>;
	}
}
