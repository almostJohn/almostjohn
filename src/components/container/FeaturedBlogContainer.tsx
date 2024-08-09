import * as React from "react";
import Link from "next/link";

type FeaturedBlogContainerProps = {
	title: string;
	href: string;
	date: string;
};

export function FeaturedBlogContainer({ title, href, date }: FeaturedBlogContainerProps) {
	return (
		<Link href={href} className="group flex items-center justify-between w-full">
			<div className="flex items-center">
				<h1 className="font-medium underline underline-offset-4 decoration-neutral-500 group-hover:decoration-white">
					{title}
				</h1>
			</div>
			<div className="flex-shrink-0">
				<span className="font-light">{date}</span>
			</div>
		</Link>
	);
}
