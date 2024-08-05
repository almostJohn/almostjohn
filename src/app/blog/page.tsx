import * as React from "react";
import type { Metadata } from "next";
import { Blogs } from "~/components/blogs/Blogs";

export const metadata: Metadata = {
	title: "Blog",
};

export default function Page() {
	return (
		<main className="flex-1 pb-16">
			<div className="container flex flex-col space-y-6">
				<div className="flex flex-col space-y-2 pt-12">
					<h1 className="text-6xl font-bold md:text-5xl">Blog</h1>
					<p className="text-lg font-light text-muted-foreground md:text-xl">
						Welcome to my blog! Here you&apos;ll find a collection of insightful articles, updates and stories about my
						journey.
					</p>
				</div>
				<div className="pt-6 flex flex-col space-y-4">
					<Blogs />
				</div>
			</div>
		</main>
	);
}
