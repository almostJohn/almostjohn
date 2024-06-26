import * as React from "react";
import Link from "next/link";
import { FEATURED_BLOGS } from "~/util/constants";
import { jetBrainsMono } from "~/util/fonts";
import { cn } from "~/lib/utils";
import { ArrowUpRight } from "lucide-react";

export function FeaturedBlogs() {
	return (
		<>
			<div className="pt-5 pb-3">
				<div className="flex flex-col space-y-4">
					{FEATURED_BLOGS.map((item, i) => (
						<div key={i} className="flex flex-col space-y-4">
							<div className="flex items-center justify-between">
								<h1 className={cn("text-lg font-medium tracking-tighter", jetBrainsMono.className)}>{item.title}</h1>
								<Link
									href="/blog"
									className="font-medium underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100"
								>
									See all
								</Link>
							</div>
							{item.options.map((opts) => (
								<Link
									key={opts.href}
									href={opts.href}
									className="inline-flex group items-center justify-between px-4 py-2 rounded border border-neutral-700 bg-neutral-800 font-medium"
								>
									<div className="flex flex-col space-y-1">
										<h2 className={cn("text-sm")}>{opts.title}</h2>
										<p className={cn("text-sm text-neutral-400")}>{opts.date}</p>
									</div>
									<ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:-rotate-12" />
								</Link>
							))}
						</div>
					))}
				</div>
			</div>
		</>
	);
}
