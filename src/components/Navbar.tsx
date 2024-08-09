"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

export function Navbar() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 w-full bg-[#111010]/95 backdrop-blur supports-[backdrop-filter]:bg-[#111010]/60">
			<div className="container flex max-w-screen-2xl h-16 items-center">
				<div className="flex items-center gap-4">
					{siteConfig.navLinks.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"transition-colors font-medium hover:text-white",
								pathname === item.href ? "line-through" : "text-neutral-500 hover:text-white",
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
