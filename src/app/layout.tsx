import * as React from "react";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { inter, jetBrainsMono } from "~/util/fonts";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

import "../styles/defaultStyle.css";
import "../styles/globals.css";

export const metadata = {
	title: siteConfig.title,
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

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "light" },
		{ media: "(prefers-color-scheme: dark)", color: "dark" },
	],
} satisfies Viewport;

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-neutral-50 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-50 text-[0.9rem] antialiased p-2 mt-5",
					`${inter.variable} ${jetBrainsMono.variable}`,
				)}
			>
				<Providers>
					<div className="mx-auto max-w-2xl px-4">{children}</div>
				</Providers>
			</body>
		</html>
	);
}
