import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { EMAIL_URL } from "~/util/constants";

export function QuickLinks() {
	return (
		<div className="flex items-center space-x-3">
			<Link href={EMAIL_URL} rel="noreferrer" target="_blank" className="flex space-x-1.5 items-center">
				<ArrowUpRight className="h-5 w-5" />
				<h3 className="font-medium underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100">
					Email Me
				</h3>
			</Link>
			<Link href="/socials" className="flex space-x-1.5 items-center">
				<ArrowUpRight className="h-5 w-5" />
				<h3 className="font-medium underline underline-offset-4 decoration-neutral-500 transition-colors hover:decoration-neutral-100">
					Socials
				</h3>
			</Link>
		</div>
	);
}
