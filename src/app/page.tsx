import * as React from "react";
import { FeaturedBlogs } from "~/components/blogs/FeaturedBlogs";
import { Projects } from "~/components/projects/Projects";
import { cn } from "~/lib/utils";
import { jetBrainsMono } from "~/lib/fonts";
import { Links } from "~/components/links/Links";

export default function IndexPage() {
	return (
		<main className="container flex flex-col flex-1 pt-8 pb-12 md:pb-16">
			<div className="flex flex-col space-y-8">
				<div className="flex flex-col space-y-3">
					<h1 className="text-2xl font-bold tracking-tighter">hey, I&apos;m john 👋</h1>
					<p className="max-w-screen-md font-light">
						I&apos;m 23 year old <strong className="font-bold">frontend developer</strong> and{" "}
						<strong className="font-bold">optimist</strong>. I like playing guitar and listening to music. I enjoy{" "}
						<strong className="font-bold">language design</strong> and{" "}
						<strong className="font-bold">web development</strong>. If I&apos;m not coding, I&apos;m probably watching
						anime or working out.
					</p>
				</div>
				<div className="flex flex-col space-y-3">
					<h1 className={cn("text-lg font-medium tracking-tighter", jetBrainsMono.className)}>projects</h1>
					<Projects />
				</div>
				<div className="flex flex-col space-y-3">
					<h1 className={cn("text-lg font-medium tracking-tighter", jetBrainsMono.className)}>blog</h1>
					<FeaturedBlogs />
				</div>
				<div className="flex flex-col space-y-3">
					<h1 className={cn("text-lg font-medium tracking-tighter", jetBrainsMono.className)}>links</h1>
					<Links />
				</div>
			</div>
		</main>
	);
}
