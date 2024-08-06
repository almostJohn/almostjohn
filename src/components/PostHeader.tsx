import * as React from "react";

type Props = {
	title: string;
	date: string;
	readTime: string;
};

export function PostHeader({ title, date, readTime }: Props) {
	return (
		<div className="pt-6 flex flex-col space-y-2">
			<h1 className="text-2xl font-bold tracking-tighter">{title}</h1>
			<div className="flex items-center justify-between">
				<span className="text-sm font-medium">{date}</span>
				<span className="text-sm text-muted-foreground">({readTime})</span>
			</div>
		</div>
	);
}
