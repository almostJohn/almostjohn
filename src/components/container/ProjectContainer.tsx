import * as React from "react";

type ProjectContainerProps = {
	href: string;
	title: string;
	description: string;
};

export function ProjectContainer({ href, title, description }: ProjectContainerProps) {
	return (
		<a href={href} className="group flex flex-col space-y-1.5">
			<h1 className="font-bold underline underline-offset-4 decoration-neutral-500 group-hover:decoration-neutral-200">
				{title}
			</h1>
			<p className="text-sm text-neutral-500">{description}</p>
		</a>
	);
}
