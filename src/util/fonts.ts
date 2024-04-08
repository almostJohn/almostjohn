import { Rubik } from "next/font/google";
import { GeistSans } from "geist/font/sans";

export const rubik = Rubik({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-rubik",
});

export const fontSans = GeistSans;
