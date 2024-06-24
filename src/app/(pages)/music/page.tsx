import * as React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "~/config/site";

export const metadata: Metadata = {
	title: "music",
};

export default function MusicPage() {
	return (
		<main className="flex-1 pb-16">
			<div className="container flex flex-col space-y-2">
				<div className="pt-6 flex flex-col">
					<h1 className="text-2xl font-bold leading-none tracking-tighter">Top Tracks</h1>
					<div className="mt-8 flex flex-col gap-4">
						{siteConfig.musics.map((item, i) => (
							<div key={i} className="flex items-center space-x-3">
								<Image src={item.cover} alt="" width={500} height={500} className="rounded h-16 w-16" />
								<div className="flex flex-col items-start space-y-1">
									<Link
										href={item.href}
										className="font-medium text-sm decoration-neutral-500 underline underline-offset-4 transition-colors hover:decoration-neutral-100"
									>
										{item.title}
									</Link>
									<span>{item.artist}</span>
									<span>{item.album}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
