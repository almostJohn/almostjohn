import * as React from "react";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { jetBrainsMono } from "~/util/fonts";

export function Projects() {
	return (
		<>
			<div className="py-5">
				<h2 className={cn("text-lg font-medium tracking-tighter", jetBrainsMono.className)}>projects</h2>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
				{siteConfig.projects.map((item, i) => (
					<div key={i} className="flex flex-col space-y-2">
						<Link
							href={item.href}
							className="underline underline-offset-4 decoration-neutral-500 font-bold transition-colors hover:decoration-neutral-100"
						>
							{item.title}
						</Link>
						<p className="font-light">{item.description}</p>
					</div>
				))}
			</div>
		</>
	);
}
