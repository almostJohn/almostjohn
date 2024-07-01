import * as React from "react";
import type { Metadata, Viewport } from "next";
import { inter, jetBrainsMono } from "~/util/fonts";
import { METADATA_TITLE } from "~/util/constants";
import { cn } from "~/lib/utils";
import { SiteHeader } from "~/components/site-header";

import "../styles/globals.css";

export const metadata: Metadata = {
	title: METADATA_TITLE,
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
	themeColor: [{ media: "(prefers-color-scheme: light)", color: "light" }],
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-neutral-900 text-neutral-100 antialiased",
					inter.variable,
					jetBrainsMono.variable,
				)}
			>
				<div className="mx-auto max-w-2xl text-[0.9rem] flex min-h-screen flex-col">
					<SiteHeader />
					{children}
				</div>
			</body>
		</html>
	);
}
