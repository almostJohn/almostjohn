import * as React from "react";
import { COOKIE_BOX_EXAMPLE_CODE, COOKIE_BOX_EXAMPLE_CODE_MAIN, COOKIE_CODE_INSTANCE } from "~/util/constants";

export function ShapeCookie() {
	return (
		<div className="flex flex-col space-y-5">
			<h3 className="text-xl leading-none tracking-tighter">The shape of (cookie) Map</h3>
			<div className="border-t border-border/40" />
			<p>
				The base structure in our example is the Cookie. Like in <strong>Node.js</strong> objects, Cookies have various
				properties you can sort and retrieve them by. A cookie instance might look something like this:
			</p>
			<div className="flex px-4 py-2 rounded border border-neutral-700 bg-neutral-800 font-medium">
				<code>
					<pre className="text-xs/relaxed">{COOKIE_CODE_INSTANCE}</pre>
				</code>
			</div>
			<p>
				Multiple cookies might be packed together inside a box. A cookie box has a flavor name to know what&apos;s
				exactly inside that box{" "}
				<code className="inline-flex items-center justify-center p-0.5 text-sm bg-neutral-800 rounded">
					.flavorName
				</code>{" "}
				and - obviously - a collection of information (ie: ingredients, shape, price, etc) of the cookies inside the
				box,{" "}
				<code className="inline-flex items-center justify-center p-0.5 text-sm bg-neutral-800 rounded">.cookies</code>.
				The structure may look something like this:
			</p>
			<div className="flex px-4 py-2 rounded border border-neutral-700 bg-neutral-800 font-medium">
				<code>
					<pre className="text-xs/relaxed">{COOKIE_BOX_EXAMPLE_CODE}</pre>
				</code>
			</div>
			<p>
				The{" "}
				<code className="inline-flex items-center justify-center p-0.5 text-sm bg-neutral-800 rounded">.cookies</code>{" "}
				inside the box are a <strong>Collection</strong>. Collections, as Maps, map a specific, unique, key to a value.
				In this case, we use the{" "}
				<code className="inline-flex items-center justify-center p-0.5 text-sm bg-neutral-800 rounded">
					.flavorName
				</code>{" "}
				of each cookie box as a key. Most Collections are keyed by the objects{" "}
				<code className="inline-flex items-center justify-center p-0.5 text-sm bg-neutral-800 rounded">.id</code>{" "}
				property.
			</p>
			<div className="flex px-4 py-2 rounded border border-neutral-700 bg-neutral-800 font-medium">
				<code>
					<pre className="text-xs/relaxed">{COOKIE_BOX_EXAMPLE_CODE_MAIN}</pre>
				</code>
			</div>
			<p>
				Now we add another layer. Our cookie stash has multiple boxes, and since we are already invested into{" "}
				<strong>Collections</strong>, let&apos;s use them for this, too! As key, we use the{" "}
				<code className="inline-flex items-center justify-center p-0.5 text-sm bg-neutral-800 rounded">
					.flavorName
				</code>{" "}
				of each box.
			</p>
			<p>
				Your{" "}
				<code className="inline-flex items-center justify-center p-0.5 text-sm bg-neutral-800 rounded">
					cookieStash.boxes
				</code>{" "}
				map will look something like this:
			</p>
			<div className="flex px-4 py-2 rounded border border-neutral-700 bg-neutral-800 font-medium">
				<code>
					<pre className="text-xs/relaxed">{COOKIE_BOX_EXAMPLE_CODE_MAIN}</pre>
				</code>
			</div>
			<p>Setup done, now let&apos;s get to work!</p>
		</div>
	);
}
