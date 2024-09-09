import { config as _config } from "@/config/config";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				dark: "#232428",
				light: "#fff",
				primary: "#0F8B8D",
			},
			container: {
				padding: {
					DEFAULT: "1rem",
				},
				center: true,
				screens: {
					sm: "600px",
					md: "728px",
					lg: "984px",
					xl: "1024px",
					"2xl": "1280px",
				},
			},
		},
	},
	plugins: [],
};
export default config;
