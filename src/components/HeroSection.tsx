import Link from "next/link";
import { SiNextdotjs as Nextjs, SiReact as React } from "@icons-pack/react-simple-icons";
import { Button } from "./ui/button";

export function HeroSection() {
	return (
		<main className="flex-1">
			<div className="container flex flex-col space-y-2">
				<article className="pt-6">
					<div className="space-y-1">
						<h2 className="text-2xl tracking-tighter">hey, I&apos;m john 👋</h2>
						<p className="prose prose-neutral dark:prose-invert pt-3">
							I am a 23-year-old frontend developer from the Philippines with a passion in web development using{" "}
							<Link
								className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
								href="https://nextjs.org"
							>
								<Nextjs width={14} height={14} className="!mr-1" /> Next.js
							</Link>
							, an open source web framework build with{" "}
							<Link
								className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
								href="https://react.dev"
							>
								<React width={14} height={14} className="!mr-1 text-sky-400" /> React
							</Link>
							. Get in touch with me via my socials below or check out my portfolio.
						</p>
						<div className="flex flex-row items-center justify-start pt-5 pb-7 gap-2">
							<Button variant="default">
								<Link href="/portfolio">View Portfolio</Link>
							</Button>
							<Button variant="outline">
								<Link href="/contact">Contact Me</Link>
							</Button>
						</div>
					</div>
				</article>
			</div>
		</main>
	);
}
