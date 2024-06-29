import * as React from "react";
import Link from "next/link";
import { Info } from "lucide-react";
import { cn } from "~/lib/utils";
import { jetBrainsMono } from "~/util/fonts";

export function Intro() {
	return (
		<div className="flex flex-col space-y-5">
			<h3 className="text-xl font-semibold leading-none tracking-tighter">Intro</h3>
			<div className="border-t border-border/40" />
			<p>
				I keep seeing people having issues with understanding <strong>Node.js</strong>{" "}
				<Link
					href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"
					className="underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100"
				>
					Map
				</Link>{" "}
				class.
			</p>
			<div className="inline-flex flex-col space-y-2 border-l-4 border-l-blue-500 bg-neutral-800 px-4 py-2">
				<div className="flex space-x-2">
					<Info className="h-5 w-5 shrink-0 text-blue-500" />
					<span className="text-blue-500">Note</span>
				</div>
				<p>
					The{" "}
					<span
						className={cn(
							"inline-flex items-center justify-center p-0.5 rounded bg-neutral-700 text-sm",
							jetBrainsMono.className,
						)}
					>
						Map
					</span>{" "}
					object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects
					and{" "}
					<Link
						href="https://developer.mozilla.org/en-US/docs/Glossary/Primitive"
						className="underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100"
					>
						primitive values
					</Link>
					) may be used as either a key or a value.
				</p>
			</div>
			<p>If that&apos;s enough for you to understand, you can stop reading here.</p>
			<p>
				Have you ever tried to think like a program? What I mean by that is: Thinking about real world objects and how a
				program might interact with these objects can help fundamentally understanding intricacies that are hard to
				understand, if you just read the documention. If you haven&apos;t, let&apos;s change that!
			</p>
			<p>
				Imagine a bakery where different types of cookies are stored in boxes. Each boxes has a label, and each label
				corresponds to a specific type of cookie. The baker needs an efficient way to manage these boxes, retrieve
				cookies, and sometimes sort them.
			</p>
			<p>
				The bakery has a lot of boxes, you might say... a <strong>Collection</strong> of them.
			</p>
			<p>
				Is this a terrible example to explain <strong>Map</strong> with? Probably. Will that stop me? Nope!
			</p>
			<p>
				Cookies dough (got it, &quot;dough&quot;, because... cookies...) Cookies are amazing. Not only can you touch
				them you can even eat them!
			</p>
			<p>
				So: Understand this cookie analogy and you can apply it to any Map in and outside of <strong>Node.js</strong>!
				Instantly makes this sound more worthwhile, right? Great, let&apos;s start!
			</p>
		</div>
	);
}
