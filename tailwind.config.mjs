/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '480px',
			lg: '800px',
		},
		extend: {
			colors: {
				'deep-teal': '#63938c',
				'beige': '#ebe5d0',
				'charcoal': '#2e303f',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
	darkMode: 'class',
}
