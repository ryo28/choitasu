const config = {
	plugins: {
		"@tailwindcss/postcss": {
			content: [
				"./src/**/*.{js,ts,jsx,tsx}",
				"./node_modules/@heroui/**/*.{js,ts,jsx,tsx}",
			],
		},
	},
};

export default config;
