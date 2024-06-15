/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#fefefe",
				bones: "#f1f1f1",
				owl: "#231F20",
				milk: "#efefef",
				wall: "#e3e3e3",
				ocean: "#0074ff",
				"light-ocean": "#006aff",
				"dark-ocean": "#004881",
				lake: "#00aeff",
				"dark-lake": "#003356",
				banana: "#ffd100",
				cricket: "#21ae2b",
				facebook: "#0c6cb9",
				fire: "#dd1717",
			},
		},
	},
	plugins: [],
}
