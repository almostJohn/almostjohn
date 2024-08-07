import * as React from "react";
import type { Metadata } from "next";
import { MainBlogs } from "~/components/blogs/Blogs";

export const metadata: Metadata = {
	title: "Blog",
};

export default function Page() {
	return (
		<main className="flex-1 pb-16">
			<div className="container flex flex-col space-y-4">
				<h1 className="text-2xl tracking-tighter my-4">read my blog</h1>
				<div className="flex flex-col space-y-4">
					<MainBlogs />
				</div>
			</div>
		</main>
	);
}
