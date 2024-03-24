import * as React from "react";
import { Metadata } from "next";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { SiteFooter } from "~/components/site-footer";

export const metadata = {
	title: "Blog",
} satisfies Metadata;

export default function Page() {
	return (
		<>
			<BlogPageHeader />
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
										"underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-4 hover:decoration-neutral-500 font-light",
									)}
								>
									<span>{blog.title}</span>
								</Link>
								<span className="text-sm/relaxed">{blog.description}</span>
								<span className="text-sm/relaxed">{blog.date}</span>
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

function BlogPageHeader() {
	return (
		<header className="h-[37.5px] flex items-center justify-between -mt-2">
			<Link
				href="/"
				target="_self"
				className={cn(
					"underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-4 hover:decoration-neutral-500",
				)}
			>
				← back
			</Link>
			<div className="text-muted-foreground flex gap-x-4">
				{siteConfig.navLinks.map((nav) => (
					<Link
						key={nav.href}
						href={nav.href}
						target="_self"
						className={cn("hover:underline hover:underline-offset-4 hover:transition-transform")}
					>
						{nav.label}
					</Link>
				))}
			</div>
		</header>
	);
}
