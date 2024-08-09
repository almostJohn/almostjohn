import * as React from "react";

export default function NotFound() {
	return (
		<div className="flex flex-1 flex-col items-center justify-center space-y-4">
			<h1 className="text-[6rem] font-bold leading-tight tracking-tighter md:text-[12rem] lg:text-[16rem]">404</h1>
			<p className="text-center text-[2rem] md:text-[3rem]">Page Not Found</p>
		</div>
	);
}
