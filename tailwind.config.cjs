/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			oswald: ['Oswald'],
			lato: ['Lato']
		},
		extend: {
			colors: {
				'intro-primary': '#DB734F',
				'intro-secondary': '#DE7E5D',
				'about-primary': '#F4D54C',
				'about-secondary': '#F5D95D',
				'projects-primary': '#3D8F5A',
				'projects-secondary': '#449661',
				'projects-bright': '#39CB6C'
			}
		}
	},
	plugins: []
};
