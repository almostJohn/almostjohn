import * as React from "react";
import { siteConfig } from "~/config/site";
import { ProjectContainer } from "../container/ProjectContainer";

export function Projects() {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
			{siteConfig.projects.map((item) => (
				<ProjectContainer key={item.href} title={item.title} href={item.href} description={item.description} />
			))}
		</div>
	);
}
