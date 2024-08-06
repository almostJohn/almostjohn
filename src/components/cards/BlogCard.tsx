import * as React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

type BlogCardProps = {
	title: string;
	href: string;
	date: string;
	readTime: string;
};

export function BlogCard({ title, href, date, readTime }: BlogCardProps) {
	return (
		<Link
			href={href}
			className="group block p-5 rounded-md shadow-md border border-border bg-white transition-all hover:border-neutral-400"
		>
			<div className="flex flex-col space-y-4">
				<div className="flex items-center gap-2">
					<span className="text-2xl font-bold group-hover:underline">{title}</span>
					<ExternalLink className="hidden h-4 w-4 text-muted-foreground shrink-0 group-hover:block" />
				</div>
				<div className="flex items-center justify-between">
					<span className="text-sm font-medium">{date}</span>
					<span className="text-sm text-muted-foreground">({readTime})</span>
				</div>
			</div>
		</Link>
	);
}
