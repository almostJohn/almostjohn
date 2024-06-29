import * as React from "react";
import Link from "next/link";
import { FOREACH_METHOD_COOKIE_BOX } from "~/util/constants";

export function MapForEach() {
	return (
		<>
			<h3 className="text-xl font-semibold leading-none tracking-tighter">Map.forEach</h3>
			<div className="border-t border-border/40" />
			<div className="inline-flex flex-col space-y-2 border-l-4 border-l-neutral-500 bg-neutral-800 px-4 py-2">
				<p className="text-neutral-500">
					&quot;Do we still have a enough quantity of Oatmeal Raisin cookies, or do I need to bake some?&quot;
				</p>
			</div>
			<p>
				You know... you are talking about Oatmeal Raisin cookies, the answer to the second part of that question is
				&quot;NO&quot; and does not depend on the first part. Well let&apos;s check. A job is a job.
			</p>
			<p>
				You go to the cookie stash, but you don&apos;t know how to check if there&apos;s enough quantity. Easy, I got
				you, let&apos;s iterate through the <strong>Map</strong> with the{" "}
				<code className="inline-flex items-center justify-center p-0.5 text-sm bg-neutral-800 rounded">forEach()</code>{" "}
				method.
			</p>
			<div className="flex px-4 py-2 rounded border border-neutral-700 bg-neutral-800 font-medium">
				<code>
					<pre className="text-xs/relaxed">{FOREACH_METHOD_COOKIE_BOX}</pre>
				</code>
			</div>
			<p>
				reference:{" "}
				<Link
					href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/forEach"
					className="underline underline-offset-4 text-blue-600"
				>
					Map#forEach
				</Link>
			</p>
		</>
	);
}
