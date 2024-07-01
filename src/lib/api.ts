import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Post } from "~/types/Post";

const postsDirectory = path.join(process.cwd(), "_posts");

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = path.join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
	const slugs = getPostSlugs();
	const posts = slugs
		.map((slug) => getPostBySlug(slug))
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	return posts;
}
