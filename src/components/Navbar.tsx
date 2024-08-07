"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

export function Navbar() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 w-full bg-neutral-900/95 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/60">
			<div className="container flex max-w-screen-2xl h-16 items-center">
				<div className="flex items-center gap-4">
					{siteConfig.navLinks.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"transition-colors text-neutral-500 hover:text-neutral-200",
								pathname === item.href ? "text-neutral-200" : "hover:text-neutral-200",
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
