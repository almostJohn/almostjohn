"use client";

import * as React from "react";
import type { Metadata, Viewport } from "next";
import { siteConfig } from "~/config/site";
import { inter, jetBrainsMono } from "~/lib/fonts";
import { cn } from "~/lib/utils";

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

export default function GlobalError({ error }: { readonly error: Error }) {
	console.error(error);

	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"bg-background text-foreground antialiased selection:bg-sky-500 selection:text-white",
					inter.variable,
					jetBrainsMono.variable,
				)}
			>
				<div className="flex flex-1 flex-col items-center justify-center space-y-4 py-12 md:py-24 lg:py-32">
					<h1 className="text-[6rem] font-bold leading-tight tracking-tighter md:text-[12rem] lg:text-[16rem]">500</h1>
					<p className="text-center text-xl text-muted-foreground md:text-[3rem]">Page Error</p>
				</div>
			</body>
		</html>
	);
}
