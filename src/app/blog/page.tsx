import * as React from "react";
import { Metadata } from "next";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { MainBlogPageHeader } from "~/components/site-header";
import { SiteFooter } from "~/components/site-footer";

export const metadata: Metadata = {
	title: "Blog - almostJohn",
};

export default function Page() {
	return (
		<>
			<MainBlogPageHeader />
			<main className="prose prose-neutral dark:prose-invert">
				<div className="pt-1">
					<h2>Blog</h2>
					<div className="my-8" />
					<div className="flex flex-col gap-12">
						{siteConfig.blogs.map((blog) => (
							<article key={blog.date} className="flex flex-col gap-3">
								<Link
									key={blog.href}
									href={blog.href}
									className={cn(
										"underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-4 hover:decoration-neutral-500",
									)}
								>
									<span>{blog.title}</span>
								</Link>
								<span>{blog.description}</span>
								<span className="text-muted-foreground">{blog.date}</span>
							</article>
						))}
					</div>
				</div>
			</main>
			<div className="mt-24" />
			<SiteFooter />
		</>
	);
}
