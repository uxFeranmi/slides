import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./{pages,components,app,utils,slides}/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'img-var': 'var(--bg-img)',
			},
		},
	},
	plugins: [],
};

export default config;
