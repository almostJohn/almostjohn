import * as React from "react";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { Projects } from "~/components/projects";
import { SiteFooter } from "~/components/site-footer";
import { siteConfig } from "~/config/site";

export default function Page() {
	return (
		<>
			<HomePageHeader />
			<div className="pt-8" />
			<main className="prose prose-neutral dark:prose-invert">
				<p>
					<small className="text-muted-foreground">&nbsp; /&apos; αιmostjohη/ - no meaning, I made it up</small>
					<br />
					Hi there, I&apos;m <strong>John</strong> aka <strong>almostjohn</strong>. I&apos;m a 23 y/o aspiring CS
					student. I write about topics in <strong>tech</strong> and <strong>web development</strong> that make me{" "}
					<strong>optimistic</strong> about the future. I enjoy <strong>building things</strong>,{" "}
					<strong>web development</strong> and I live in the <strong>terminal</strong>.
				</p>
				<div className="mt-12" />
				<h2>Projects</h2>
				<Projects />
				<div className="mt-12" />
				<h2>Blog</h2>
				<div className="flex flex-col gap-4">
					<article className="flex justify-between">
						{siteConfig.featureBlogs.map((blog) => (
							<>
								<Link
									key={blog.href}
									href={blog.href}
									target="_blank"
									rel="noreferrer"
									className={cn(
										"underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-4 hover:decoration-neutral-500 font-light",
									)}
								>
									<span>{blog.title}</span>
								</Link>
								<span>{blog.date}</span>
							</>
						))}
					</article>
					<span>
						<Link
							href="/blog"
							className={cn(
								"underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-4 hover:decoration-neutral-500 font-light",
							)}
						>
							All posts →
						</Link>
					</span>
				</div>
			</main>
			<div className="mt-24" />
			<SiteFooter />
		</>
	);
}

function HomePageHeader() {
	return (
		<header className="h-[37.5px] flex items-center justify-between -mt-2">
			<h1 className="text-muted-foreground">almostJohn</h1>
			<div className="text-muted-foreground flex gap-x-4">
				<Link
					href="/blog"
					target="_self"
					className={cn("hover:underline hover:underline-offset-4 hover:transition-transform")}
				>
					blog
				</Link>
				<Link
					href="/contact"
					target="_self"
					className={cn("hover:underline hover:underline-offset-4 hover:transition-transform")}
				>
					contact
				</Link>
			</div>
		</header>
	);
}
