import * as React from "react";
import { Info } from "lucide-react";
import Link from "next/link";

export function MapSize() {
	return (
		<>
			<h3 className="text-xl font-semibold leading-none tracking-tighter">Map.size</h3>
			<div className="border-t border-border/40" />
			<p>
				Map have a property{" "}
				<code className="inline-flex items-center justify-center p-0.5 text-sm bg-neutral-800 rounded">.size</code>{" "}
				which returns - you guessed it - the amount of elements inside the Map. So following the thought experiment{" "}
				<code className="inline-flex items-center justify-center p-0.5 text-sm bg-neutral-800 rounded">
					cookieStash.boxes.size
				</code>{" "}
				would return the number of cookie boxes in our stash. So that&apos;d be how we find out when we need to bake
				again, by looking up the amount of boxes, who would&apos;ve thought!
			</p>
			<div className="inline-flex flex-col space-y-2 border-l-4 border-l-blue-500 bg-neutral-800 px-4 py-2">
				<div className="flex space-x-2">
					<Info className="h-5 w-5 shrink-0 text-blue-500" />
					<span className="text-blue-500">Note</span>
				</div>
				<p>
					You do not count the boxes every time! The Map has an inherent counter that gets updated everytime element are
					added or removed. This is somewhat important as counting things would take you going through the map element
					by element otherwise, which is very inefficient!
				</p>
			</div>
			<p>
				reference:{" "}
				<Link
					href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/size"
					className="font-medium underline underline-offset-4 text-blue-600"
				>
					Map#size
				</Link>
			</p>
		</>
	);
}
