import * as React from "react";
import Link from "next/link";

type HomePageBlogContainerProps = {
	title: string;
	href: string;
	date: string;
};

type MainBlogContainerProps = {
	title: string;
	href: string;
	date: string;
	readTime: string;
};

export function HomePageBlogContainer({ title, href, date }: HomePageBlogContainerProps) {
	return (
		<Link href={href} className="group flex items-center justify-between w-full">
			<div className="flex items-center">
				<h1 className="font-bold underline underline-offset-4 decoration-neutral-500 group-hover:decoration-neutral-200">
					{title}
				</h1>
			</div>
			<div className="flex-shrink-0">
				<span className="text-sm text-neutral-500">{date}</span>
			</div>
		</Link>
	);
}

export function MainBlogContainer({ title, href, date, readTime }: MainBlogContainerProps) {
	return (
		<Link href={href} className="group flex flex-col space-y-1.5">
			<h1 className="font-bold underline underline-offset-4 decoration-neutral-500 group-hover:decoration-neutral-200">
				{title}
			</h1>
			<div className="flex items-center justify-between w-full">
				<span className="text-sm text-neutral-500">{date}</span>
				<span className="flex-shrink-0 text-sm text-neutral-500">({readTime})</span>
			</div>
		</Link>
	);
}
