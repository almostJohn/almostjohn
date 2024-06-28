"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HEADER_LINKS } from "~/util/constants";
import { cn } from "~/lib/utils";

export function SiteHeader() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 w-full bg-neutral-900">
			<div className="container flex max-w-screen-2xl h-14 items-center justify-between">
				<div className="flex items-center space-x-4">
					{HEADER_LINKS.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"transition-colors text-neutral-500 hover:text-neutral-100",
								pathname === item.href ? "text-neutral-100" : "hover:text-neutral-100",
							)}
						>
							{item.title}
						</Link>
					))}
				</div>
			</div>
		</header>
	);
}
