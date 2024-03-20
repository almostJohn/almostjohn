import { Inter, JetBrains_Mono, Rubik, Poppins } from "next/font/google";

export const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

export const jetBrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-mono",
});

export const rubik = Rubik({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-rubik",
});

export const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-poppins",
	weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
