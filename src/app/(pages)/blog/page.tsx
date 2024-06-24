import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { jetBrainsMono } from "~/util/fonts";

export const metadata: Metadata = {
	title: "blog",
};

export default function BlogPage() {
	return (
		<main className="flex-1 pb-16">
			<div className="container flex flex-col space-y-2">
				<div className="pt-6 flex flex-col">
					<h1 className="text-2xl font-bold leading-none tracking-tighter">Blog</h1>
					<div className="mt-8 flex flex-col gap-4">
						{siteConfig.blogs.map((item, i) => (
							<>
								<Link
									key={i}
									href={item.href}
									className="font-bold decoration-neutral-500 underline underline-offset-4 transition-colors hover:decoration-neutral-100"
								>
									{item.title}
								</Link>
								<p className="font-light">{item.description}</p>
								<span className={cn(jetBrainsMono.className)}>{item.date}</span>
							</>
						))}
					</div>
				</div>
			</div>
		</main>
	);
}
