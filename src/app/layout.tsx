import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";
import { inter, jetBrainsMono } from "~/util/fonts";

import "../styles/custom.css";
import "../styles/globals.css";

export const metadata = {
	title: {
		default: "almostJohn",
		template: "% | almostJohn",
	},
	icons: {
		other: [
			{
				url: "/favicon.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				url: "/favicon.png",
				sizes: "16x16",
				type: "image/png",
			},
		],
	},
} satisfies Metadata;

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html className={`${inter.variable} ${jetBrainsMono.variable}`} lang="en" suppressHydrationWarning>
			<body className="antialiased bg-white text-black dark:bg-dark dark:text-white">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
