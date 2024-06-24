import * as React from "react";
import { Introduction } from "~/components/introduction";
import { FeaturedBlogs } from "~/components/blog/featured-blogs";
import { FeaturedProjects } from "~/components/projects/featured_projects";

export default function IndexPage() {
	return (
		<main className="flex-1 pb-16">
			<div className="container flex flex-col space-y-2">
				<div className="pt-6 flex flex-col space-y-2">
					<Introduction />
				</div>
				<div className="flex flex-col space-y-4 py-4">
					<FeaturedProjects />
					<FeaturedBlogs />
				</div>
			</div>
		</main>
	);
}
