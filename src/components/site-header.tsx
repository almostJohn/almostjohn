"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { ModeToggle } from "./mode-toggle";

const mainNav = [
	{
		label: "home",
		href: "/",
	},
	{
		label: "portfolio",
		href: "/portfolio",
	},
	{
		label: "contact",
		href: "/contact",
	},
];

export function SiteHeader() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-2xl items-center">
				<nav className="flex items-center gap-6 text-sm">
					{mainNav.map((nav) => (
						<Link
							key={nav.href}
							href={nav.href}
							className={cn(
								"transition-colors hover:line-through",
								pathname === nav.href ? "line-through" : "text-foreground/60",
							)}
						>
							{nav.label}
						</Link>
					))}
				</nav>
				<div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
					<nav className="flex items-center">
						<ModeToggle />
					</nav>
				</div>
			</div>
		</header>
	);
}
