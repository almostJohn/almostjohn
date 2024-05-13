import * as React from "react";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { fontSans, inter, jetBrainsMono } from "~/util/fonts";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { SiteHeader } from "~/components/site-header";

import "../styles/globals.css";

export const metadata: Metadata = {
	title: siteConfig.title,
	icons: {
		other: [
			{
				url: "/j-icon-32.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				url: "/j-icon-16.png",
				sizes: "16x16",
				type: "image/png",
			},
		],
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "light" },
		{ media: "(prefers-color-scheme: dark)", color: "dark" },
	],
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background text-[0.9rem] antialiased",
					fontSans.variable,
					inter.variable,
					jetBrainsMono.variable,
				)}
			>
				<Providers>
					<div className="max-w-2xl mx-auto flex min-h-screen flex-col py-8">
						<SiteHeader />
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
