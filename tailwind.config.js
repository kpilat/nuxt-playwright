/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '24px',
				sm: '48px',
				lg: '96px',
			},
		},
		extend: {},
	},
	plugins: [],
};