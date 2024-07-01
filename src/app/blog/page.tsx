import * as React from "react";
import type { Metadata } from "next";
import { METADATA_BLOG_PAGE_TITLE } from "~/util/constants";
import { RenderAllBlogs } from "~/components/blogs";

export const metadata: Metadata = {
	title: METADATA_BLOG_PAGE_TITLE,
};

export default function Page() {
	return (
		<main className="flex-1 pb-16">
			<div className="container flex flex-col space-y-6">
				<div className="pt-4 flex flex-col space-y-4">
					<h1 className="text-xl font-bold leading-none tracking-tighter md:text-2xl">Blog</h1>
					<RenderAllBlogs />
				</div>
			</div>
		</main>
	);
}
