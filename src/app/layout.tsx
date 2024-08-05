import * as React from "react";
import type { Metadata, Viewport } from "next";
import { inter, jetBrainsMono } from "~/lib/fonts";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";

import "../styles/globals.css";

export const metadata: Metadata = {
	title: siteConfig.title,
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
};

export const viewport: Viewport = {
	themeColor: [{ media: "(prefers-color-scheme: dark)", color: "dark" }],
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"bg-background text-foreground antialiased selection:bg-sky-500 selection:text-white",
					inter.variable,
					jetBrainsMono.variable,
				)}
			>
				<div className="mx-auto max-w-6xl min-h-screen flex flex-col">
					<Navbar />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
