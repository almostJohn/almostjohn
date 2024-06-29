import * as React from "react";
import { Info } from "lucide-react";
import Link from "next/link";
import { GET_METHOD_COOKIE_BOX } from "~/util/constants";

export function MapGet() {
	return (
		<>
			<h3 className="text-xl font-semibold leading-none tracking-tighter">Map.get</h3>
			<div className="border-t border-border/40" />
			<div className="inline-flex flex-col space-y-2 border-l-4 border-l-neutral-500 bg-neutral-800 px-4 py-2">
				<p className="text-neutral-500">
					&quot;So... we have a problem, the box that has a flavor name{" "}
					<code className="inline-flex items-center justify-center p-0.5 text-sm bg-neutral-700 text-neutral-300 rounded">
						Chocolate Chip
					</code>{" "}
					is missing a quality seal, could you retrieve it from the stack in the back please?&quot;
				</p>
			</div>
			<p>
				Heckin sure you can! Since our Map of boxes are keyed with their flavor names, you can simply use the Map method{" "}
				<code className="inline-flex items-center justify-center p-0.5 text-sm bg-neutral-800 rounded">
					<Link
						href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get"
						className="underline underline-offset-4 text-blue-600"
					>
						.get(key)
					</Link>
				</code>{" "}
				to retrieve the corresponding box. The key here is said in their flavor names.
			</p>
			<p>
				So you simply go to the back, look at the big list on the shelf and retrieve the box in the slot corresponding
				to the flavor name. Easy.
			</p>
			<div className="inline-flex flex-col space-y-2 border-l-4 border-l-blue-500 bg-neutral-800 px-4 py-2">
				<div className="flex space-x-2">
					<Info className="h-5 w-5 shrink-0 text-blue-500" />
					<span className="text-blue-500">Note</span>
				</div>
				<p>
					You don&apos;t go to the back and read each and every box, you simply get the right one. This is way faster
					operation than reading labels on all the boxes.
				</p>
			</div>
			<div className="inline-flex flex-col space-y-2 border-l-4 border-l-purple-500 bg-neutral-800 px-4 py-2">
				<div className="flex space-x-2">
					<Info className="h-5 w-5 shrink-0 text-purple-500" />
					<span className="text-purple-500">Important</span>
				</div>
				<p>
					<strong>Always</strong> use{" "}
					<code className="inline-flex items-center justify-center p-0.5 text-sm bg-neutral-700 rounded">
						.get(key)
					</code>{" "}
					if you want to retrieve by key, in <strong>Node.js</strong> most collections are keyed by id (as a string).
				</p>
			</div>
			<div className="flex px-4 py-2 rounded border border-neutral-700 bg-neutral-800 font-medium">
				<code>
					<pre className="text-xs/relaxed">{GET_METHOD_COOKIE_BOX}</pre>
				</code>
			</div>
			<p>
				reference:{" "}
				<Link
					href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/get"
					className="underline underline-offset-4 text-blue-600"
				>
					Map#get
				</Link>
			</p>
		</>
	);
}
