import * as React from "react";

type Props = {
	title: string;
	date: string;
	readTime: string;
};

export function PostHeader({ title, date, readTime }: Props) {
	return (
		<div className="pt-6 flex flex-col space-y-2">
			<h1 className="text-xl font-semibold leading-tight tracking-tighter md:text-2xl">{title}</h1>
			<div className="flex items-center justify-between">
				<span className="text-sm font-light text-neutral-400">{date}</span>
				<span className="text-sm font-light text-neutral-400">({readTime})</span>
			</div>
		</div>
	);
}
