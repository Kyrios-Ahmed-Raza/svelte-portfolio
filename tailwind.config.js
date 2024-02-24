/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: ['class', '[color-scheme="dark"]'],
	theme: {
		extend: {
			colors: {
				bubbleclr1: '#f06',
				bubbleclr2: '#0af'
			},
			screens: {
				exsm: '400px'
			}
		}
	},
	plugins: []
};
