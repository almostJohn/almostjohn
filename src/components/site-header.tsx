import * as React from "react";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { jetBrainsMono } from "~/util/fonts";

export function SiteHeader() {
	return (
		<div className="container">
			<div className={cn("flex items-center gap-2 font-medium", jetBrainsMono.className)}>
				<Link href="/" className="text-indigo-600 underline underline-offset-4 transition-colors hover:text-indigo-800">
					almostjohn
				</Link>
				/
				<Link
					href={siteConfig.social.twitter}
					className=" text-indigo-600 underline underline-offset-4 transition-colors hover:text-indigo-800"
					target="_blank"
					rel="noreferrer"
				>
					twitter
				</Link>
				/
				<Link
					href={siteConfig.social.github}
					className="text-indigo-600 underline underline-offset-4 transition-colors hover:text-indigo-800"
					target="_blank"
					rel="noreferrer"
				>
					github
				</Link>
			</div>
		</div>
	);
}
