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
			title: "Pixel Blaze starter",
			description: "Custom Websites Crafted Just for You",
			metadataBase: new URL("https://pixel-blaze.com/"),
			openGraph: {
				images: "/opengraph-image.png",
			},
		},
	},
	locale: "pl",
};
