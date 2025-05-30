import { getPlaiceholder } from "plaiceholder";

export default async function getBase64Image(imageUrl: string) {
	try {
		const res = await fetch(imageUrl);

		if (!res.ok) {
			throw new Error("Faild fetch image");
		}

		const buffer = await res.arrayBuffer();

		const { base64 } = await getPlaiceholder(Buffer.from(buffer));

		return base64;
	} catch (e) {
		if (e instanceof Error) console.log(e.stack);
	}
}
