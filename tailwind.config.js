module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "6rem",
				"2xl": "8rem",
			},
		},
		extend: {
			fontFamily: {
				helv: "Helvetica, sans-serif",
			},
			backgroundSize: {
				"size-200": "200% 200%",
			},
		},
	},
	plugins: [],
};
