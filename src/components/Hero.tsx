import Link from "next/link";
import { SiNextdotjs as NextJS, SiReact as React } from "@icons-pack/react-simple-icons";
import { cn } from "~/util/cn";

export function Hero() {
	return (
		<div className="min-h-screen">
			<div className="max-w-5xl mx-auto min-h-screen flex flex-col place-content-center p-4">
				<main>
					<section>
						<h1 className="text-6xl font-bold leading-tight">
							Hey, I&apos;m <span className="text-sky-500">John</span>!
						</h1>
						<p className="py-4 text-lg font-light prose text-neutral-800 dark:text-neutral-300">
							I am a 23-year-old frontend developer from the Philippines with a passion for using{" "}
							<Link
								href="https://nextjs.org"
								className="border border-neutral-400 dark:border-neutral-700 bg-neutral-200 dark:bg-lightDark rounded p-1 text-sm inline-flex items-center leading-4 text-black dark:text-white no-underline"
							>
								<NextJS width={14} height={14} className="!mr-1" /> Next.js
							</Link>
							, an open-source web framework built with{" "}
							<Link
								href="https://react.dev"
								className="border border-neutral-400 dark:border-neutral-700 bg-neutral-200 dark:bg-lightDark rounded p-1 text-sm inline-flex items-center leading-4 text-black dark:text-white no-underline"
							>
								<React width={14} height={14} className="!mr-1 text-cyan-600" /> React
							</Link>
							. Feel free to get in touch with me via my socials below or check out my portfolio.
						</p>
						<div className="flex flex-row gap-4">
							<Link
								href="/portfolio"
								className={cn(
									"btn rounded border-0 bg-blurple hover:bg-lightBlurple text-white dark:bg-lightDark dark:hover:bg-neutral-700 transition-colors",
								)}
							>
								View Portfolio
							</Link>
							<Link
								href="/contact"
								className={cn(
									"btn rounded bg-white dark:bg-dark border-neutral-400 dark:border-neutral-700 hover:bg-white hover:border-dark dark:hover:bg-dark dark:hover:border-white text-black dark:text-white transition-colors",
								)}
							>
								Contact Me
							</Link>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}
