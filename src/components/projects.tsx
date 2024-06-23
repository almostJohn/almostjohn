import * as React from "react";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { jetBrainsMono } from "~/util/fonts";

export function Projects() {
	return (
		<>
			<div className="space-y-1">
				<h2 className={cn("text-lg font-medium tracking-tighter", jetBrainsMono.className)}>projects</h2>
			</div>
			<ul className="space-y-4 py-4">
				{siteConfig.projects.map((item, index) => (
					<li key={index}>
						<Link className="flex flex-col space-y-1.5 !no-underline" href={item.href} target="_blank" rel="noreferrer">
							<div>
								<span
									className={cn(
										"font-medium text-indigo-600 underline underline-offset-4 transition-colors hover:text-indigo-800",
										jetBrainsMono.className,
									)}
								>
									{item.title}
								</span>
							</div>
							<span className={cn(jetBrainsMono.className)}>{item.description}</span>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
