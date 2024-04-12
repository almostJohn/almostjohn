"use client";

import type { Metadata } from "next";
import { Providers } from "./providers";
import { fontSans, inter, jetBrainsMono } from "~/util/fonts";
import { cn } from "~/lib/utils";

import "../styles/default-styles.css";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: {
		default: "almostJohn",
		template: "%s - almostJohn",
	},
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

export default function GlobalError({ error }: { readonly error: Error }) {
	console.error(error);

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
					<main className="flex-1">
						<div className="container flex flex-col items-center justify-center pt-24 pb-24 space-y-4">
							<h1 className="text-2xl font-bold tracking-tighter">500</h1>
							<p className="text-muted-foreground">Page Error.</p>
						</div>
					</main>
				</Providers>
			</body>
		</html>
	);
}
