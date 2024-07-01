import * as React from "react";
import Link from "next/link";
import { getAllPosts } from "~/lib/api";
import { cn } from "~/lib/utils";
import { jetBrainsMono } from "~/util/fonts";

export function RenderFeaturedBlogs({ limit }: { limit: number }) {
	const posts = getAllPosts().slice(0, limit);

	return (
		<div className="pt-5 pb-3">
			<div className="flex flex-col space-y-5">
				<h1 className={cn("text-lg font-medium tracking-tighter", jetBrainsMono.className)}>blog</h1>
				<div className="flex flex-col space-y-4">
					{posts.map((post, i) => (
						<Link key={i} href={`/blog/${post.slug}`} className="flex items-center justify-between space-x-4">
							<h3 className="underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100">
								{post.title}
							</h3>
							<span className="flex-shrink-0">{post.date}</span>
						</Link>
					))}
					<Link
						href="/blog"
						className="underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100"
					>
						All posts →
					</Link>
				</div>
			</div>
		</div>
	);
}

export function RenderAllBlogs() {
	const posts = getAllPosts();

	return (
		<div className="flex flex-col space-y-5">
			{posts.map((post, i) => (
				<Link key={i} href={`/blog/${post.slug}`} className="flex flex-col space-y-2">
					<h3 className="underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100">
						{post.title}
					</h3>
					<p>{post.date}</p>
				</Link>
			))}
		</div>
	);
}
