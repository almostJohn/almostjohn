import Link from "next/link";
import { getAllPosts } from "~/lib/api";

export function Blogs() {
	const posts = getAllPosts();

	return (
		<div className="flex flex-col space-y-3">
			{posts.map((post, i) => (
				<Link key={i} href={`/blog/${post.slug}`} className="text-blue-500 transition-colors hover:text-blue-700">
					{post.title}
				</Link>
			))}
		</div>
	);
}
