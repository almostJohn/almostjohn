import * as React from "react";
import { getAllPosts } from "~/lib/api";
import { BlogCard } from "~/components/cards/BlogCard";

export function Blogs({ limit }: { limit?: number }) {
	const posts = getAllPosts().slice(0, limit);

	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
			{posts.map((post, i) => (
				<BlogCard key={i} title={post.title} href={`/blog/${post.slug}`} date={post.date} readTime={post.readTime!} />
			))}
		</div>
	);
}
