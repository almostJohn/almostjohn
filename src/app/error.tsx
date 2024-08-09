"use client";

import * as React from "react";

export default function Error({ error }: { readonly error: Error }) {
	console.error(error);

	return (
		<div className="flex flex-1 flex-col items-center justify-center space-y-4">
			<h1 className="text-[6rem] font-bold leading-tight tracking-tighter md:text-[12rem] lg:text-[16rem]">500</h1>
			<p className="text-center text-[2rem] md:text-[3rem]">Page Error</p>
		</div>
	);
}
