import Link from "next/link";
import { cn } from "~/util/cn";

export function Hero() {
	return (
		<div className="min-h-screen">
			<div className="max-w-5xl mx-auto min-h-screen flex flex-col place-content-center p-4">
				<main>
					<section>
						<h1 className="text-6xl font-bold leading-tight">
							Hey, I&apos;m <span className="text-blurple">John</span>!
						</h1>
						<p className="py-4 prose text-black dark:text-white">
							I am a 23-year-old <span className="font-bold underline underline-offset-4">software developer</span> and
							a <span className="font-bold underline underline-offset-4">discord bot developer</span> from the
							Philippines with a passion for completing my studies and pursuing my career.
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
									"btn rounded bg-white dark:bg-dark border-white dark:border-dark hover:bg-white hover:border-dark dark:hover:bg-dark dark:hover:border-white text-black dark:text-white transition-colors",
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
