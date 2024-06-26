import * as React from "react";
import Link from "next/link";
import { HEADER_LINKS } from "~/util/constants";

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 w-full bg-neutral-900">
			<div className="container flex max-w-screen-2xl h-14 items-center justify-between">
				<div className="flex items-center space-x-4 transition-colors hover:text-neutral-500">
					{HEADER_LINKS.map((item) => (
						<Link key={item.href} href={item.href} className="transition-colors hover:text-neutral-100">
							{item.title}
						</Link>
					))}
				</div>
			</div>
		</header>
	);
}
