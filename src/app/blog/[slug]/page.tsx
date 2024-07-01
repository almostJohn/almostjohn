import * as React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "~/lib/api";
import { markdownToHtml } from "~/lib/markdownToHtml";
import { PostHeader } from "~/components/post-header";
import { PostBody } from "~/components/post-body";

export function generateMetadata({ params }: Params): Metadata {
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	return {
		title: post.title,
	};
}

export default async function PostPage({ params }: Params) {
	const post = getPostBySlug(params.slug);

	if (!post) {
		return notFound();
	}

	const content = await markdownToHtml(post.content || "");

	return (
		<main>
			<div className="container">
				<article className="flex-1 pb-16">
					<div className="flex flex-col">
						<PostHeader title={post.title} date={post.date} readTime={post.readTime!} />
						<PostBody content={content} />
					</div>
				</article>
			</div>
		</main>
	);
}

type Params = {
	params: {
		slug: string;
	};
};

export function generateStaticParams() {
	const posts = getAllPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}
