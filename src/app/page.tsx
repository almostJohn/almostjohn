import * as React from "react";
import Image from "next/image";
import { Introduction } from "~/components/introduction";
import { FULL_NAME, TAG } from "~/util/constants";
import { FeaturedProjects } from "~/components/projects/featured-projects";
import { FeaturedBlogs } from "~/components/blog/featured-blogs";

export default function IndexPage() {
	return (
		<main className="flex-1 pb-16">
			<div className="container flex flex-col space-y-4">
				<div className="pt-8 flex flex-col space-y-6">
					<div className="flex items-center space-x-3">
						<Image src="/me.jpg" alt="" width={500} height={500} className="h-16 w-16 rounded-full" />
						<div className="flex flex-col space-y-1">
							<h1 className="text-xl font-bold md:text-2xl">{FULL_NAME}</h1>
							<p className="font-light text-neutral-500">{TAG}</p>
						</div>
					</div>
					<Introduction />
					<FeaturedProjects />
					<FeaturedBlogs />
				</div>
			</div>
		</main>
	);
}
