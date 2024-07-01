import * as React from "react";
import { RenderFeaturedBlogs } from "~/components/blogs";
import { Introduction } from "~/components/introduction";
import { Projects } from "~/components/projects";
import { QuickLinks } from "~/components/quick-links";

export default function IndexPage() {
	return (
		<main className="flex-1 pb-16">
			<div className="container flex flex-col space-y-4">
				<div className="pt-8 flex flex-col space-y-4">
					<Introduction />
					<Projects />
					<RenderFeaturedBlogs limit={5} />
					<QuickLinks />
				</div>
			</div>
		</main>
	);
}
