/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screen: {
				sm: '480px',
				md: '768px',
			}
				
			}
		},
	}

	plugins: []

