import { IProyect } from "@/types/proyect-type";

export function getProyectInfo(): IProyect[] {
	return [
		{
			id: 1,
			name: "Ecomerce Academlo",
			images: [
				{
					id: 1,
					url: "/ecomerce.avif",
				},
			],
			type: "personal",
			inProcess: false,
			url: "https://josuesss72.github.io/ecormece/",
			description:
				"Project developed with HTML, CSS, and JavaScript, focused on designing an interactive prototype for a clothing store.",
		},
		{
			id: 2,
			name: "Pokedex",
			images: [
				{
					id: 1,
					url: "/pokedex.avif",
				},
			],
			type: "personal",
			inProcess: false,
			url: "https://cheerful-douhua-8c5eef.netlify.app/",
			description:
				"Project developed with React and Redux, which consumes a Pokémon API to display their abilities, characteristics, and much more detailed information.",
		},
	];
}
