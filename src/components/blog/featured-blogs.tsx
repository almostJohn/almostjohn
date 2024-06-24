import * as React from "react";
import Link from "next/link";
import { FEATURED_BLOGS } from "~/util/constants";
import { jetBrainsMono } from "~/util/fonts";
import { cn } from "~/lib/utils";

export function FeaturedBlogs() {
	return (
		<>
			<div className="pt-5 pb-3">
				<div className="flex flex-col space-y-4">
					{FEATURED_BLOGS.map((item, i) => (
						<>
							<h2 key={i} className={cn("text-lg font-medium tracking-tighter", jetBrainsMono.className)}>
								{item.title}
							</h2>
							<div className="flex flex-col gap-4">
								{item.options.map((item, i) => (
									<div key={i} className="flex items-center justify-between">
										<Link
											key={item.href}
											href={item.href}
											className="font-bold underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100"
										>
											{item.title}
										</Link>
										<span className="truncate">{item.date}</span>
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
					))}
				</div>
			</div>
		</>
	);
}
