import * as React from "react";
import Link from "next/link";
import { getAllPosts } from "~/lib/api";

export function Blogs({ limit }: { limit?: number }) {
	const posts = getAllPosts().slice(0, limit);

	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
			{posts.map((post, i) => (
				<Link
					key={i}
					href={`/blog/${post.slug}`}
					className="group block p-5 shadow-md border border-border bg-muted rounded-md"
				>
					<div className="flex flex-col space-y-2.5">
						<h2 className="text-lg font-bold leading-tight tracking-tighter underline-offset-4 group-hover:underline">
							{post.title}
						</h2>
						<div className="flex items-center justify-between w-full">
							<span className="text-sm font-medium">{post.date}</span>
							<span className="text-xs text-muted-foreground">({post.readTime})</span>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}
