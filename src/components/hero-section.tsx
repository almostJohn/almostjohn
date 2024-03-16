import * as React from "react";
import Link from "next/link";
import { SiNextdotjs as Nextjs, SiReact as ReactIcon } from "@icons-pack/react-simple-icons";
import { buttonVariants } from "./ui/button";
import { cn } from "~/lib/utils";

export function HeroSection() {
	return (
		<main className="flex-1">
			<div className="flex container flex-col space-y-6 py-16">
				<article className="pt-1">
					<div className="space-y-3">
						<h2 className="text-2xl mb-8 tracking-tighter">hey, I&apos;m john 👋</h2>
						<div className="prose prose-neutral dark:prose-invert">
							<p>
								I&apos;m a 23 y/o <strong>software developer</strong> from the Philippines. I write about things in{" "}
								<strong>tech</strong> and <strong>web development</strong> that make me <strong>optimistic</strong> for
								the future, where I use{" "}
								<Link
									href="https://nextjs.org"
									rel="noreferrer"
									target="_blank"
									className={cn(
										"rounded p-1 border bg-background text-sm inline-flex items-center leading-4 no-underline text-black dark:text-white",
									)}
								>
									<Nextjs className="!mr-1" width={14} height={14} /> Next.js
								</Link>
								, an open-source web framework built with{" "}
								<Link
									href="https://react.dev"
									rel="noreferrer"
									target="_blank"
									className={cn(
										"rounded p-1 border bg-background text-sm inline-flex items-center leading-4 no-underline text-black dark:text-white",
									)}
								>
									<ReactIcon className="!mr-1 text-sky-500" width={14} height={14} /> React
								</Link>
								. If you want to know me more, get in touch with me via my <strong>socials</strong> below or check out{" "}
								<strong>my portfolio</strong>.
							</p>
						</div>
						<div className="flex items-center justify-start gap-2 pt-2">
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
