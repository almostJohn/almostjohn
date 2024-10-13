import Link from "next/link";
import { Dot } from "lucide-react";
import { getAllPosts } from "~/lib/api";

export function Blogs() {
	const posts = getAllPosts();

	return (
		<div className="flex flex-col space-y-3">
			{posts.map((post, i) => (
				<Link key={i} href={`/blog/${post.slug}`} className="flex items-center space-x-2">
					<Dot />
					<span className="text-blue-500 transition-colors hover:text-blue-700">{post.title}</span>
				</Link>
			))}
		</div>
	);
}
