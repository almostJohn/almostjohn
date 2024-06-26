import * as React from "react";
import Link from "next/link";
import { PROJECTS } from "~/util/constants";
import { cn } from "~/lib/utils";
import { jetBrainsMono } from "~/util/fonts";

export function FeaturedProjects() {
	return (
		<>
			<div className="pt-5 pb-3">
				<div className="flex flex-col space-y-4">
					{PROJECTS.map((item, i) => (
						<>
							<h2 key={i} className={cn("text-lg font-medium tracking-tighter", jetBrainsMono.className)}>
								{item.title}
							</h2>
							<div className="grid grid-cols-2 gap-4">
								{item.options.map((item) => (
									<Link key={item.href} href={item.href} className="flex flex-col space-y-2">
										<h1 className="text-sm font-medium underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100">
											{item.title}
										</h1>
										<p className="text-sm text-neutral-400">{item.description}</p>
									</Link>
								))}
							</div>
						</>
					))}
				</div>
			</div>
		</>
	);
}
