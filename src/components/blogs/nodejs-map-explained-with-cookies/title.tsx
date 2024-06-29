import * as React from "react";

export function Title() {
	return (
		<div className="flex flex-col space-y-3">
			<h1 className="text-xl font-medium tracking-tighter md:text-2xl">Node.js Map Explained With Cookies</h1>
			<div className="flex items-center justify-between">
				<p className="text-xs text-neutral-500">June 29, 2024</p>
				<p className="text-xs text-neutral-500">(30min read)</p>
			</div>
		</div>
	);
}
