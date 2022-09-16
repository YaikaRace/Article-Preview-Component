/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./public/index.html"],
	theme: {
		colors: {
			transparent: "transparent",
			white: "white",
			"v-dark-grayish-blue": "hsl(217, 19%, 35%)",
			"d-dark-blue": "hsl(214, 17%, 51%)",
			"grayish-blue": "hsl(212, 23%, 69%)",
			"l-grayish-blue": "hsl(210, 46%, 95%)",
		},
		extend: {
			fontFamily: {
				body: ["'Manrope'", ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
