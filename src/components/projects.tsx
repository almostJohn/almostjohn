import * as React from "react";
import Link from "next/link";
import { PROJECTS } from "~/util/constants";
import { cn } from "~/lib/utils";
import { jetBrainsMono } from "~/util/fonts";

export function Projects() {
	return (
		<div className="pt-5 pb-3">
			<div className="flex flex-col space-y-5">
				<h1 className={cn("text-lg font-medium tracking-tighter", jetBrainsMono.className)}>projects</h1>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
					{PROJECTS.map((item) => (
						<Link key={item.href} href={item.href} className="group flex flex-col space-y-2">
							<h5
								className={cn(
									"underline underline-offset-4 decoration-neutral-500 font-medium tracking-tighter transition-transform group-hover:decoration-neutral-100",
									jetBrainsMono.className,
								)}
							>
								{item.title}
							</h5>
							<p className="font-light">{item.description}</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
