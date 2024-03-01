import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";
import { inter, jetBrainsMono } from "~/util/fonts";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";

import "../styles/custom.css";
import "../styles/globals.css";

export const metadata = {
	title: {
		default: "almostJohn",
		template: "%s - almostJohn",
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

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "light" },
		{ media: "(prefers-color-scheme: dark)", color: "dark" },
	],
} satisfies Viewport;

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html className={`${inter.variable} ${jetBrainsMono.variable}`} lang="en" suppressHydrationWarning>
			<body className="min-h-screen bg-background antialiased">
				<Providers>
					<div className="max-w-2xl flex flex-col min-h-screen mx-auto py-8">
						<Header />
						{children}
						<Footer />
					</div>
				</Providers>
			</body>
		</html>
	);
}
