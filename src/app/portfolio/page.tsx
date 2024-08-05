import * as React from "react";
import type { Metadata } from "next";
import { FeaturedProject } from "~/components/projects/FeaturedProject";
import { Projects } from "~/components/projects/Projects";

export const metadata: Metadata = {
	title: "Portfolio",
};

export default function Page() {
	return (
		<main className="flex-1 pb-16">
			<div className="container flex flex-col space-y-6">
				<div className="flex flex-col space-y-2 pt-12">
					<h1 className="text-6xl font-bold md:text-5xl">Portfolio</h1>
					<p className="text-lg font-light text-muted-foreground md:text-xl">
						Take a look at some of my projects that I&apos;ve worked on, websites that I made, and frameworks I built.
					</p>
				</div>
				<div className="pt-6 flex flex-col space-y-4">
					<FeaturedProject />
					<div className="pt-12">
						<Projects />
					</div>
				</div>
			</div>
		</main>
	);
}
