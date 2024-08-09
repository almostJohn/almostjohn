import * as React from "react";

type ProjectContainerProps = {
	href: string;
	title: string;
	description: string;
};

export function ProjectContainer({ href, title, description }: ProjectContainerProps) {
	return (
		<a href={href} className="group flex flex-col space-y-2">
			<h1 className="font-medium underline underline-offset-4 decoration-neutral-500 group-hover:decoration-white">
				{title}
			</h1>
			<p className="max-w-sm font-light">{description}</p>
		</a>
	);
}
