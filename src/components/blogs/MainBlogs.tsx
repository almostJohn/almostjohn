import * as React from "react";
import { getAllPosts } from "~/lib/api";
import { MainBlogContainer } from "../container/MainBlogContainer";

export function MainBlogs() {
	const posts = getAllPosts();

	return (
		<div className="flex flex-col space-y-6">
			{posts.map((item, i) => (
				<MainBlogContainer
					key={i}
					title={item.title}
					href={`/blog/${item.slug}`}
					date={item.date}
					readTime={item.readTime!}
				/>
			))}
		</div>
	);
}
