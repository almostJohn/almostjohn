"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { Icons } from "~/components/Icons";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "~/components/ui/sheet";
import { Button } from "~/components/ui/button";

export function Navbar() {
	const pathname = usePathname();

	return (
		<header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex max-w-screen-2xl h-20 items-center justify-between">
				<div className="hidden items-center md:flex">
					<Link href="/">
						<Icons.brand />
					</Link>
				</div>
				<div className="hidden items-center gap-6 md:flex">
					{siteConfig.navLinks.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"transition-transform underline-offset-4 hover:underline",
								pathname === item.href ? "underline underline-offset-4" : "underline-offset-4 hover:underline",
							)}
						>
							{item.title}
						</Link>
					))}
				</div>
				<MobileNav />
			</div>
		</header>
	);
}

function MobileNav() {
	const [open, setOpen] = React.useState(false);
	const pathname = usePathname();

	const handleOpen = () => {
		setOpen((open) => !open);
	};

	React.useEffect(() => {
		setOpen(false);
	}, [pathname]);

	return (
		<div className="flex flex-1 items-end justify-end md:hidden">
			<Sheet open={open} onOpenChange={handleOpen}>
				<SheetTrigger asChild>
					<Button variant="ghost" className="hover:bg-transparent">
						<Icons.menu />
					</Button>
				</SheetTrigger>
				<SheetContent className="w-full h-full bg-background">
					<SheetHeader>
						<SheetTitle className="sr-only">Mobile Nav Title</SheetTitle>
						<SheetDescription className="sr-only">Mobile Nav Description</SheetDescription>
					</SheetHeader>
					<div className="mx-auto h-full flex flex-col items-center justify-center space-y-6">
						{siteConfig.navLinks.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={cn(
									"transition-transform underline-offset-4 hover:underline",
									pathname === item.href ? "underline underline-offset-4" : "underline-offset-4 hover:underline",
								)}
							>
								{item.title}
							</Link>
						))}
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
