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
							<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
								{item.options.map((item, i) => (
									<Link key={i} href={item.href} className="flex flex-col space-y-2">
										<h1 className="font-bold underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100">
											{item.title}
										</h1>
										<p className="font-light">{item.description}</p>
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
