import * as React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

type MainBlogContainerProps = {
	title: string;
	href: string;
	date: string;
	readTime: string;
};

export function MainBlogContainer({ title, href, date, readTime }: MainBlogContainerProps) {
	return (
		<Link href={href} className="group flex flex-col space-y-2">
			<div className="flex items-center space-x-1.5">
				<h1 className="text-lg font-medium underline underline-offset-4 decoration-neutral-500 transition-colors group-hover:decoration-white">
					{title}
				</h1>
				<ExternalLink className="hidden h-4 w-4 text-neutral-500 shrink-0 group-hover:block" />
			</div>
			<p className="font-light">{date}</p>
			<p className="font-light">({readTime})</p>
		</Link>
	);
}
