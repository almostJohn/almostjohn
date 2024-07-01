import * as React from "react";
import Link from "next/link";
import { EMAIL_URL, GITHUB_URL, TWITTER_URL } from "~/util/constants";
import { jetBrainsMono } from "~/util/fonts";
import { cn } from "~/lib/utils";

export function QuickLinks() {
	return (
		<div className="pt-5 pb-3">
			<div className="flex flex-col space-y-5">
				<h1 className={cn("text-lg font-medium tracking-tighter", jetBrainsMono.className)}>links</h1>
				<div className={cn("flex items-center gap-2", jetBrainsMono.className)}>
					<Link href={EMAIL_URL} rel="noreferrer" target="_blank" className="flex items-center">
						<h3 className="font-medium underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100">
							email
						</h3>
					</Link>
					/
					<Link href={GITHUB_URL} rel="noreferrer" target="_blank" className="flex items-center">
						<h3 className="font-medium underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100">
							github
						</h3>
					</Link>
					/
					<Link href={TWITTER_URL} rel="noreferrer" target="_blank" className="flex items-center">
						<h3 className="font-medium underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100">
							twitter
						</h3>
					</Link>
				</div>
			</div>
		</div>
	);
}
