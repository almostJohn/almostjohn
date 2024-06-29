import * as React from "react";
import Link from "next/link";
import { HAS_METHOD_COOKIE_BOX } from "~/util/constants";

export function MapHas() {
	return (
		<>
			<h3 className="text-xl font-semibold leading-none tracking-tighter">Map.has</h3>
			<div className="border-t border-border/40" />
			<div className="inline-flex flex-col space-y-2 border-l-4 border-l-neutral-500 bg-neutral-800 px-4 py-2">
				<p className="text-neutral-500">
					&quot;Is the box that has a flavor name of{" "}
					<code className="inline-flex items-center justify-center p-0.5 text-sm bg-neutral-700 text-neutral-300 rounded">
						Chocolate Chip
					</code>{" "}
					still in the stash?&quot;
				</p>
			</div>
			<p>
				You go back to our list of boxes, check if the one keyed to{" "}
				<code className="inline-flex items-center justify-center p-0.5 text-sm bg-neutral-800 rounded">
					Chocolate Chip
				</code>{" "}
				is still there, and shout a &quot;YES&quot; to the front. We just returned a boolean,{" "}
				<code className="inline-flex items-center justify-center p-0.5 text-sm bg-neutral-800 rounded">true</code>{" "}
				and... yeah, that&apos;s exactly how{" "}
				<code className="inline-flex items-center justify-center p-0.5 text-sm bg-neutral-800 rounded">
					<Link
						href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has"
						className="underline underline-offset-4 text-blue-600"
					>
						Map.has()
					</Link>
				</code>{" "}
				works.
			</p>
			<div className="flex px-4 py-2 rounded border border-neutral-700 bg-neutral-800 font-medium">
				<code>
					<pre className="text-xs/relaxed">{HAS_METHOD_COOKIE_BOX}</pre>
				</code>
			</div>
			<p>
				reference:{" "}
				<Link
					href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/has"
					className="underline underline-offset-4 text-blue-600"
				>
					Map#has
				</Link>
			</p>
		</>
	);
}
