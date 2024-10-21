/** @type {import('postcss-load-config').Config} */
const config = {
	plugins: {
		tailwindcss: {},
		// autoprefixer: {},
		// "autoprefixer": "^10.4.20",
	},
};

// Using mjs extension for postcss config file didn't work on  windows.
// Changing to js fixed it.

module.exports = config;
