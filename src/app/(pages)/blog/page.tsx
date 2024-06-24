import * as React from "react";
import type { Metadata } from "next";
import { MainBlog } from "~/components/blog/main-blog";
import { METADATA_BLOG_PAGE_TITLE } from "~/util/constants";

export const metadata: Metadata = {
	title: METADATA_BLOG_PAGE_TITLE,
};

export default function BlogPage() {
	return (
		<main className="flex-1 pb-16">
			<div className="container flex flex-col space-y-4">
				<MainBlog />
			</div>
		</main>
	);
}
