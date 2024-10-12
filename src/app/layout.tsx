import * as React from "react";
import type { Metadata, Viewport } from "next";
import { inter, jetBrainsMono } from "~/lib/fonts";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

import "~/styles/globals.css";
import { Footer } from "~/components/Footer";

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
					"bg-neutral-100 text-neutral-900 antialiased selection:bg-blue-400 selection:text-white",
					inter.variable,
					jetBrainsMono.variable,
				)}
			>
				<div className="mx-auto max-w-2xl min-h-screen flex flex-col">
					{children}
					<Footer />
				</div>
			</body>
		</html>
	);
}
