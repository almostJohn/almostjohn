import * as React from "react";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { siteConfig } from "~/config/site";

export function HomePageHeader() {
	return (
		<header className="h-[37.5px] text-[0.9rem] flex items-center justify-between -mt-2">
			<h1 className="text-muted-foreground">almostJohn</h1>
			<div className="text-muted-foreground flex gap-x-4">
				{siteConfig.navLinks.map((nav) => (
					<Link
						key={nav.href}
						href={nav.href}
						className={cn("hover:underline hover:underline-offset-4 transition-transform")}
					>
						{nav.label}
					</Link>
				))}
			</div>
		</header>
	);
}

export function ContactPageHeader() {
	return (
		<header className="h-[37.5px] text-[0.9rem] flex items-center justify-between -mt-2">
			<Link
				href="/"
				target="_self"
				className={cn(
					"underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-4 hover:decoration-neutral-500",
				)}
			>
				← back
			</Link>
			<div className="text-muted-foreground flex gap-x-4">
				{siteConfig.navLinks.map((nav) => (
					<Link
						key={nav.href}
						href={nav.href}
						className={cn("hover:underline hover:underline-offset-4 transition-transform")}
					>
						{nav.label}
					</Link>
				))}
			</div>
		</header>
	);
}

export function MainBlogPageHeader() {
	return (
		<header className="h-[37.5px] text-[0.9rem] flex items-center justify-between -mt-2">
			<Link
				href="/"
				target="_self"
				className={cn(
					"underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-4 hover:decoration-neutral-500",
				)}
			>
				← back
			</Link>
			<div className="text-muted-foreground flex gap-x-4">
				{siteConfig.navLinks.map((nav) => (
					<Link
						key={nav.href}
						href={nav.href}
						className={cn("hover:underline hover:underline-offset-4 transition-transform")}
					>
						{nav.label}
					</Link>
				))}
			</div>
		</header>
	);
}

export function ChildBlogPageHeader() {
	return (
		<header className="h-[37.5px] text-[0.9rem] flex items-center justify-between -mt-2">
			<Link
				href="/blog"
				target="_self"
				className={cn(
					"underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-4 hover:decoration-neutral-500",
				)}
			>
				← back
			</Link>
			<div className="text-muted-foreground flex gap-x-4">
				{siteConfig.navLinks.map((nav) => (
					<Link
						key={nav.href}
						href={nav.href}
						className={cn("hover:underline hover:underline-offset-4 transition-transform")}
					>
						{nav.label}
					</Link>
				))}
			</div>
		</header>
	);
}
