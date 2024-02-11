import type { Config } from "tailwindcss";

const config = {
	content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				lightBlurple: "#7289dA",
				blurple: "#5865f2",
				white: "#ffffff",
				dark: "#23272a",
				lightDark: "#2c2f33",
				gray: "#99aab5",
				black: "#000000",
			},
			textColor: {
				lightBlurple: "#7289dA",
				blurple: "#5865f2",
				white: "#ffffff",
				dark: "#23272a",
				lightDark: "#2c2f33",
				gray: "#99aab5",
				black: "#000000",
			},
			borderColor: {
				lightBlurple: "#7289dA",
				blurple: "#5865f2",
				white: "#ffffff",
				dark: "#23272a",
				lightDark: "#2c2f33",
				gray: "#99aab5",
				black: "#000000",
			},
		},
	},
	plugins: [require("daisyui"), require("@tailwindcss/typography")],
} satisfies Config;

export default config;
