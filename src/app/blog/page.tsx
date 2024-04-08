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
			<main className="leading-7 [&:not(:first-child)]:mt-6">
				<div className="pt-1">
					<div className="my-6">
						<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Blog</h3>
					</div>
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
								<p>{blog.description}</p>
								<p className={cn("text-muted-foreground")}>{blog.date}</p>
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
