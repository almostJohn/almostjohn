import * as React from "react";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";

export default function IndexPage() {
	return (
		<main className="flex-1 pb-16">
			<div className="container flex flex-col space-y-4">
				<div className="flex flex-col space-y-4 pt-16 md:pt-20 lg:pt-24">
					<div className="flex flex-col space-y-2.5">
						<h1 className="text-6xl font-bold leading-tight tracking-tighter">
							Hey, I&apos;m <span className="text-sky-500">John</span>!
						</h1>
						<p className="py-2 max-w-md text-lg font-light text-muted-foreground md:text-xl">
							I&apos;m 23 year old <strong>frontend developer</strong> and <strong>optimist</strong>. I like playing
							guitar and listening to music. I enjoy <strong>language design</strong> and{" "}
							<strong>web development</strong>. If I&apos;m not coding, I&apos;m probably watching anime or working out.
						</p>
						<div className="pt-2 flex items-center gap-2">
							<Link
								href="/portfolio"
								className={cn(
									buttonVariants({
										variant: "default",
										className: "h-10",
									}),
								)}
							>
								View Portfolio
							</Link>
							<Link
								href="/blog"
								className={cn(
									buttonVariants({
										variant: "outline",
										className: "h-10",
									}),
								)}
							>
								Read my blog
							</Link>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
