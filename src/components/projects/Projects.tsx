import * as React from "react";
import { siteConfig } from "~/config/site";
import { ProjectCard } from "../cards/ProjectCard";

export function Projects() {
	return (
		<div className="grid grid-cols-1 gap-5 auto-rows-fr md:grid-cols-2">
			<ProjectCard
				image="/secretposts.png"
				href={siteConfig.projects.secretposts}
				title="secretposts.link"
				description="Express yourself freely without revealing who you are."
			/>
			<ProjectCard
				image="/djs-framework.png"
				href={siteConfig.projects.djs_framework.website}
				title="djs-framework"
				description="A framework for building discord bot the fastest way."
			/>
			<ProjectCard
				image="/tscfg.png"
				href={siteConfig.projects.tsconfig.website}
				title="tsconfig"
				description="A typescript configuration that you can copy and paste into your projects."
			/>
		</div>
	);
}
