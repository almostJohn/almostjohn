import * as React from "react";
import type { Metadata } from "next";
import { METADATA_BLOG_PAGE_TITLE } from "~/util/constants";
import { MainBlog } from "~/components/blog/main-blog";

export const metadata: Metadata = {
	title: METADATA_BLOG_PAGE_TITLE,
};

export default function Page() {
	return (
		<main className="flex-1 pb-16">
			<div className="container flex flex-col space-y-4">
				<div className="flex flex-col space-y-6">
					<MainBlog />
				</div>
			</div>
		</main>
	);
}
