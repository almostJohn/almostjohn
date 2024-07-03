import * as React from "react";
import { LONG_INTRO, SHORT_INTRO } from "~/util/constants";

export function Introduction() {
	return (
		<div className="flex flex-col space-y-4">
			<div className="flex flex-col space-y-2">
				<h1 className="text-2xl font-semibold tracking-tighter mb-4">{SHORT_INTRO}</h1>
			</div>
			<div>
				<p className="font-light">{LONG_INTRO}</p>
			</div>
		</div>
	);
}
