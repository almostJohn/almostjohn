"use client";

import type { Metadata } from "next";
import { Providers } from "./providers";
import { inter } from "~/util/fonts";

import "../styles/custom.css";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: {
		default: "almostjohn",
		template: "% | almostjohn",
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
};

export default function GlobalError({ error }: { readonly error: Error }) {
	console.error(error);

	return (
		<html className={inter.variable} lang="en" suppressHydrationWarning>
			<body className="antialiased bg-white text-black dark:bg-dark dark:text-white">
				<Providers>
					<main className="mx-auto max-w-2xl min-h-screen">
						<div className="mx-auto max-w-lg min-h-screen flex flex-col place-content-center place-items-center gap-8 px-8 py-16 lg:px-6 lg:py-0">
							<h1 className="text-[8rem] font-black leading-none md:text-[6rem]">500</h1>
							<h2 className="text-[6rem] md:text-[3rem] text-center">Error.</h2>
						</div>
					</main>
				</Providers>
			</body>
		</html>
	);
}
