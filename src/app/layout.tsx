import * as React from "react";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { inter, jetBrainsMono } from "~/util/fonts";
import { SiteHeader } from "~/components/site-header";
import { SiteFooter } from "~/components/site-footer";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

import "../styles/defaultStyle.css";
import "../styles/globals.css";

export const metadata = {
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
} satisfies Metadata;

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
} satisfies Viewport;

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<html className={`${inter.variable} ${jetBrainsMono.variable}`} lang="en" suppressHydrationWarning>
			<body className={cn("min-h-screen bg-background antialiased")}>
				<Providers>
					<div vaul-drawer-wrapper="">
						<div className="relative max-w-2xl flex min-h-screen flex-col bg-background mx-auto">
							<SiteHeader />
							{children}
							<SiteFooter />
						</div>
					</div>
				</Providers>
			</body>
		</html>
	);
}
