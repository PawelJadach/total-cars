import { Metadata } from "next";

type Config = {
	metadata: {
		[key: string]: Metadata;
	};
	locale: string;
};

export const config: Config = {
	metadata: {
		root: {
			title: "Total Cars - Wynajem luksusowych limuzyn z kierowcą",
			description: "Wynajem luksusowych limuzyn z kierowcą",
			openGraph: {
				images: "/opengraph-image.png",
			},
		},
	},
	locale: "pl",
};
