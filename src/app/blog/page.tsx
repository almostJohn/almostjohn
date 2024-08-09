import * as React from "react";
import type { Metadata } from "next";
import { MainBlogs } from "~/components/blogs/MainBlogs";

export const metadata: Metadata = {
	title: "Blog",
};

export default function Page() {
	return (
		<main className="container flex flex-col flex-1 pt-8 pb-12 md:pb-16">
			<div className="flex flex-col space-y-6">
				<h1 className="text-2xl font-medium tracking-tighter">read my blog</h1>
				<MainBlogs />
			</div>
		</main>
	);
}
