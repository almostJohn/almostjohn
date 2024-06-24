import * as React from "react";
import type { Metadata, Viewport } from "next";
import { fontSans, inter, jetBrainsMono } from "~/util/fonts";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { SiteFooter } from "~/components/site-footer";

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
	themeColor: [{ media: "(prefers-color-scheme: light)", color: "light" }],
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-neutral-900 text-neutral-100 text-[0.9rem] antialiased",
					fontSans.variable,
					inter.variable,
					jetBrainsMono.variable,
				)}
			>
				<div className="mx-auto max-w-2xl flex min-h-screen flex-col py-8">
					{children}
					<SiteFooter />
				</div>
			</body>
		</html>
	);
}
