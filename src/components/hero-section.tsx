import * as React from "react";
import Link from "next/link";
import { SiNextdotjs as Nextjs, SiReact as ReactIcon } from "@icons-pack/react-simple-icons";
import { buttonVariants } from "./ui/button";
import { cn } from "~/lib/utils";

export function HeroSection() {
	return (
		<main className="flex-1">
			<div className="flex container flex-col space-y-6 py-16">
				<article className="pt-2">
					<div className="space-y-3">
						<h2 className="text-2xl tracking-tighter">hey, I&apos;m john 👋</h2>
						<p className="prose prose-neutral dark:prose-invert space-y-3 text-muted-foreground text-balance">
							I am a 23-year-old frontend developer from the Philippines with a passion in web development using{" "}
							<Link
								className={cn(
									"border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline rounded",
								)}
								href="https://nextjs.org"
							>
								<Nextjs width={14} height={14} className="!mr-1" /> Next.js
							</Link>
							, an open-source web framework built with{" "}
							<Link
								className={cn(
									"border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline rounded",
								)}
								href="https://react.dev"
							>
								<ReactIcon width={14} height={14} className="!mr-1 text-sky-400" /> React
							</Link>
							. Get in touch with me via my socials below or check out my portfolio.
						</p>
						<div className="flex flex-row items-start justify-start pt-4 pb-6 gap-2">
							<Link href="/portfolio" className={cn(buttonVariants())}>
								View Portfolio
							</Link>
							<Link href="/contact" className={cn(buttonVariants({ variant: "outline" }))}>
								Contact Me
							</Link>
						</div>
					</div>
				</article>
			</div>
		</main>
	);
}
