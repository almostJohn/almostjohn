import * as React from "react";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

export function Projects() {
	return (
		<div className="grid grid-cols-2 gap-4 md:grid-cols-3">
			{siteConfig.projects.map((project) => (
				<div key={project.href} className="flex flex-col">
					<Link
						href={project.href}
						className={cn(
							"underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-4 hover:decoration-neutral-500",
						)}
					>
						<span className="font-medium">{project.title}</span>
					</Link>
					<span className="pt-3 text-muted-foreground">{project.description}</span>
				</div>
			))}
		</div>
	);
}
