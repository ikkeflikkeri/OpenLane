/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#2563eb',
					dark: '#1e40af'
				}
			}
		}
	},
	plugins: []
};
