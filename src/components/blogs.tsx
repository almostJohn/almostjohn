import * as React from "react";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { rubik } from "~/util/fonts";

export function Blogs() {
	return (
		<div className="flex flex-col gap-4">
			<article className="flex justify-between">
				{siteConfig.featureBlogs.map((blog) => (
					<>
						<Link
							key={blog.href}
							href={blog.href}
							className={cn(
								"underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-4 hover:decoration-neutral-500",
							)}
						>
							<span>{blog.title}</span>
						</Link>
						<p className={cn("text-muted-foreground", rubik.className)}>{blog.date}</p>
					</>
				))}
			</article>
			<span>
				<Link
					href="/blog"
					className={cn(
						"underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-4 hover:decoration-neutral-500",
					)}
				>
					All posts →
				</Link>
			</span>
		</div>
	);
}
