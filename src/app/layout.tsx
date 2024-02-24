import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";
import { inter, jetBrainsMono } from "~/util/fonts";

import "../styles/custom.css";
import "../styles/globals.css";

export const metadata = {
	title: "almostJohn",
	icons: {
		other: [
			{
				url: "/favicon.jpg",
				sizes: "32x32",
				type: "image/jpeg",
			},
			{
				url: "/favicon.jpg",
				sizes: "16x16",
				type: "image/jpeg",
			},
		],
	},
} satisfies Metadata;

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html className={`${inter.variable} ${jetBrainsMono.variable}`} lang="en" suppressHydrationWarning>
			<body className="bg-background antialiased">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
