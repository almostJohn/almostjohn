import * as React from "react";
import Link from "next/link";
import {
	SiNextdotjs as Nextjs,
	SiReact as ReactIcon,
	SiTypescript as TypeScript,
	SiPostgresql as PostgreSQL,
} from "@icons-pack/react-simple-icons";
import { buttonVariants } from "./ui/button";
import { cn } from "~/lib/utils";

export function HeroSection() {
	return (
		<main className="flex-1">
			<div className="flex container flex-col space-y-6 py-16">
				<article className="pt-2">
					<div className="space-y-3">
						<h1 className="text-3xl mb-8 tracking-tighter">hey, I&apos;m john 👋</h1>
						<p className="prose prose-neutral dark:prose-invert text-muted-foreground">
							I am a 23-year-old frontend developer from the Philippines with a passion in web development using{" "}
							<Link
								className={cn(
									"border bg-background p-1 text-sm inline-flex items-center leading-4 no-underline rounded text-black dark:text-white",
								)}
								href="https://nextjs.org"
							>
								<Nextjs width={14} height={14} className="!mr-1" /> Next.js
							</Link>
							, an open-source web framework built with{" "}
							<Link
								className={cn(
									"border bg-background p-1 text-sm inline-flex items-center leading-4 no-underline rounded text-black dark:text-white",
								)}
								href="https://react.dev"
							>
								<ReactIcon width={14} height={14} className="!mr-1 text-sky-400" /> React
							</Link>
							. My go-to stack for web development is{" "}
							<Link
								className={cn(
									"border bg-transparent p-1 text-sm inline-flex items-center leading-4 no-underline rounded text-black dark:text-white",
								)}
								href="https://www.typescriptlang.org/"
							>
								<TypeScript width={14} height={14} className="!mr-1 text-blue-500" /> TypeScript
							</Link>
							, combined with the use of{" "}
							<Link
								className={cn(
									"border bg-transparent p-1 leading-4 text-sm inline-flex items-center no-underline rounded text-black dark:text-white",
								)}
								href="https://www.postgresql.org/"
							>
								<PostgreSQL width={14} height={14} className="!mr-1 text-blue-400" /> PostgreSQL
							</Link>
							, an advanced, enterprise-class open-source relational database that supports both SQL (relational) and
							JSON (non-relational) querying. Get in touch me via my socials below or check out my portfolio.
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
