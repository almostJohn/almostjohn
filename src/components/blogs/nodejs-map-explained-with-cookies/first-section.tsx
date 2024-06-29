import * as React from "react";

export function FirstSection() {
	return (
		<div className="flex flex-col space-y-5">
			<h3 className="text-xl font-semibold leading-none tracking-tighter">Explanation using the Map class</h3>
			<div className="border-t border-border/40" />
			<p>
				The <code className="inline-flex items-center justify-center text-sm p-0.5 bg-neutral-800 rounded">Map</code>{" "}
				class in <strong>Node.js</strong> is like a smart organizer for the baker. It helps the baker to:
			</p>
			<ul className="flex flex-col space-y-1">
				<li>• Store cookies in labeled boxes (keys and values).</li>
				<li>• Retrieve cookies from specific boxes using the labels.</li>
				<li>• Check if a certain type of cookies is available.</li>
				<li>• Get the total number of different types of cookies.</li>
				<li>• Remove all cookies of a specific type if needed.</li>
				<li>• Iterate through all boxes to list out or sort the cookies.</li>
			</ul>
		</div>
	);
}
