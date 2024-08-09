import * as React from "react";
import Link from "next/link";
import { getAllPosts } from "~/lib/api";
import { FeaturedBlogContainer } from "../container/FeaturedBlogContainer";

export function FeaturedBlogs() {
	const posts = getAllPosts().slice(0, 4);

	return (
		<div className="flex flex-col space-y-4">
			{posts.map((post, i) => (
				<FeaturedBlogContainer key={i} title={post.title} href={`/blog/${post.slug}`} date={post.date} />
			))}
			<Link
				href="/blog"
				className="font-medium underline underline-offset-4 decoration-neutral-500 hover:decoration-white"
			>
				All posts →
			</Link>
		</div>
	);
}
