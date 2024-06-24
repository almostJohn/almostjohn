import * as React from "react";
import Link from "next/link";
import { BLOGS } from "~/util/constants";

export function MainBlog() {
	return (
		<>
			<div className="pt-6 flex flex-col space-y-4">
				{BLOGS.map((item, i) => (
					<>
						<h1 className="text-2xl font-bold leading-none tracking-tighter">{item.title}</h1>
						<div key={i} className="flex flex-col gap-4">
							{item.options.map((opts, i) => (
								<>
									<Link
										key={i}
										href={opts.href}
										className="font-medium underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100"
									>
										{opts.title}
									</Link>
									<span>{opts.description}</span>
									<span>{opts.date}</span>
								</>
							))}
						</div>
					</>
				))}
			</div>
		</>
	);
}
