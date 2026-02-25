/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: '#2563eb',
					dark: '#1e40af',
					light: '#60a5fa'
				},
				surface: {
					DEFAULT: '#0b1120',
					raised: '#0f172a',
					soft: '#111827'
				},
				muted: '#94a3b8'
			},
			spacing: {
				18: '4.5rem',
				22: '5.5rem',
				30: '7.5rem'
			},
			boxShadow: {
				card: '0 14px 40px -28px rgba(15, 23, 42, 0.75)',
				lift: '0 18px 45px -30px rgba(37, 99, 235, 0.45)'
			}
		}
	},
	plugins: []
};
