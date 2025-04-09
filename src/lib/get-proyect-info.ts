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
			github: "https://github.com/josuesss72/ecormece",
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
			github: "https://github.com/josuesss72/pokedex",
			description:
				"Project developed with React and Redux, which consumes a Pokémon API to display their abilities, characteristics, and much more detailed information.",
		},
		{
			id: 3,
			name: "Rick and Morty",
			images: [
				{
					id: 1,
					url: "/rickandmorty.avif",
				},
			],
			type: "personal",
			inProcess: false,
			url: "https://sage-gnome-77a400.netlify.app/",
			github: "https://github.com/josuesss72/RickAndMorty",
			description:
				"A web app displaying characters from the Rick and Morty series. It was developed using React and Redux, and it consumes an API to fetch the characters' information.",
		},
		{
			id: 4,
			name: "Weather App",
			images: [
				{
					id: 1,
					url: "/watherapp.png",
				},
			],
			type: "personal",
			inProcess: false,
			url: "https://leafy-swan-0a82b2.netlify.app/",
			github: "https://github.com/josuesss72/weather",
			description:
				"A weather application that provides real-time weather data based on the user’s location. It was developed using React and Redux, and it consumes an API to fetch the weather information.",
		},
	];
}
