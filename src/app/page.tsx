import * as React from "react";
import { HomePageBlogs } from "~/components/blogs/Blogs";
import { Projects } from "~/components/projects/Projects";
import { cn } from "~/lib/utils";
import { jetBrainsMono } from "~/lib/fonts";
import { siteConfig } from "~/config/site";

export default function IndexPage() {
	return (
		<main className="container flex flex-1 flex-col space-y-4 pt-8 pb-16">
			<h1 className="text-2xl font-bold tracking-tighter">hey, I&apos;m john 👋</h1>
			<p className="font-light">
				I&apos;m 23 year old <strong className="font-bold">frontend developer</strong> and optimist. I like playing
				guitar and listening to music. I enjoy <strong className="font-bold">language design</strong> and{" "}
				<strong className="font-bold">web development</strong>. If I&apos;m not coding, I&apos;m probably watching anime
				or working out.
			</p>
			<div className="pt-6 flex flex-col space-y-4">
				<h1 className={cn("text-lg font-medium tracking-tighter", jetBrainsMono.className)}>projects</h1>
				<Projects />
			</div>
			<div className="pt-6 flex flex-col space-y-4">
				<h1 className={cn("text-lg font-bold tracking-tighter", jetBrainsMono.className)}>blog</h1>
				<HomePageBlogs limit={3} />
			</div>
			<div className="pt-8 pb-12">
				<div className={cn("flex items-center gap-2", jetBrainsMono.className)}>
					<a
						href={siteConfig.socialLinks.email}
						rel="noreferrer"
						target="_blank"
						className="font-medium underline underline-offset-4 decoration-neutral-500 hover:decoration-neutral-100"
					>
						email
					</a>
					/
					<a
						href={siteConfig.socialLinks.github}
						rel="noreferrer"
						target="_blank"
						className="font-medium underline underline-offset-4 decoration-neutral-500 hover:decoration-neutral-100"
					>
						github
					</a>
					/
					<a
						href={siteConfig.socialLinks.twitter}
						rel="noreferrer"
						target="_blank"
						className="font-medium underline underline-offset-4 decoration-neutral-500 hover:decoration-neutral-100"
					>
						twitter
					</a>
				</div>
			</div>
		</main>
	);
}
