import * as React from "react";
import Link from "next/link";
import { getAllPosts } from "~/lib/api";
import { HomePageBlogContainer, MainBlogContainer } from "../container/BlogContainer";

export function HomePageBlogs({ limit }: { limit?: number }) {
	const posts = getAllPosts().slice(0, limit);

	return (
		<div className="flex flex-col space-y-4">
			{posts.map((post, i) => (
				<HomePageBlogContainer key={i} title={post.title} href={`/blog/${post.slug}`} date={post.date} />
			))}
			<Link href="/blog" className="underline underline-offset-4 decoration-neutral-500 hover:decoration-neutral-200">
				All posts →
			</Link>
		</div>
	);
}

export function MainBlogs() {
	const posts = getAllPosts();

	return (
		<div className="flex flex-col space-y-4">
			{posts.map((post, i) => (
				<MainBlogContainer
					key={i}
					title={post.title}
					href={`/blog/${post.slug}`}
					date={post.date}
					readTime={post.readTime!}
				/>
			))}
		</div>
	);
}
