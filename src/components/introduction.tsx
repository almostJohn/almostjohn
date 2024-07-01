import * as React from "react";
import Image from "next/image";
import { FULL_NAME, INTRODUCTION, TAG } from "~/util/constants";

export function Introduction() {
	return (
		<div className="flex flex-col space-y-4">
			<div className="flex items-center space-x-3">
				<div className="flex items-center space-x-3">
					<Image src="/me.jpg" alt="" width={500} height={500} className="h-16 w-16 rounded-full" />
					<div className="flex flex-col space-y-1">
						<h1 className="text-xl font-bold md:text-2xl">{FULL_NAME}</h1>
						<p className="font-light text-neutral-500">{TAG}</p>
					</div>
				</div>
			</div>
			<div>
				<p className="font-light">{INTRODUCTION}</p>
			</div>
		</div>
	);
}
