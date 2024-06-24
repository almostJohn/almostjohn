import * as React from "react";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { jetBrainsMono } from "~/util/fonts";
import { cn } from "~/lib/utils";

export function FeaturedBlogs() {
	return (
		<>
			<div className="py-5">
				<h2 className={cn("text-lg font-medium tracking-tighter", jetBrainsMono.className)}>blog</h2>
			</div>
			<div className="flex flex-col space-y-4">
				{siteConfig.featuredBlogs.map((item, i) => (
					<div key={i} className="flex items-center justify-between">
						<Link
							key={item.href}
							href={item.href}
							className="underline underline-offset-4 decoration-neutral-500 font-bold transition-colors hover:decoration-neutral-100"
						>
							{item.title}
						</Link>
						<p className={cn("truncate", jetBrainsMono.className)}>{item.date}</p>
					</div>
				))}
				<Link
					href="/blog"
					className="underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100"
				>
					All posts →
				</Link>
			</div>
		</>
	);
}
