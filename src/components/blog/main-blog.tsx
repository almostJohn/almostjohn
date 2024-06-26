import * as React from "react";
import Link from "next/link";
import { BLOGS } from "~/util/constants";

export function MainBlog() {
	return (
		<>
			<div className="pt-6 flex flex-col space-y-4">
				{BLOGS.map((item, i) => (
					<>
						<h1 key={i} className="text-2xl font-bold leading-none tracking-tighter mb-4">
							{item.title}
						</h1>
						{item.options.map((opts) => (
							<>
								<Link key={opts.href} href={opts.href} className="flex flex-col space-y-1">
									<h1 className="text-sm font-medium underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100">
										{opts.title}
									</h1>
									<span className="text-neutral-500">{opts.date}</span>
								</Link>
							</>
						))}
					</>
				))}
			</div>
		</>
	);
}
