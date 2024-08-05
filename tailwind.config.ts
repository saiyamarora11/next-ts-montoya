import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["var(--font-poppins)", "sans-serif"],
				sixCaps: ["var(--font-six-caps)", "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["dark"],
	},
};

export default config;
