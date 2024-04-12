import * as React from "react";
import Link from "next/link";
import { siteConfig } from "~/config/site";

export function Projects() {
	return (
		<>
			<div className="space-y-1">
				<h2 className="font-mono text-lg font-bold tracking-tighter">projects</h2>
			</div>
			<ul className="space-y-4 py-4">
				{siteConfig.projects.map((item, index) => (
					<li key={index}>
						<Link className="flex flex-col space-y-1.5 !no-underline" href={item.href}>
							<div>
								<span className="font-medium underline underline-offset-4">{item.title}</span>
							</div>
							<span className="text-muted-foreground">{item.description}</span>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
