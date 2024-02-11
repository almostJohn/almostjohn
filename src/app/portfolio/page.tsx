import { NavigationBar } from "~/components/NavigationBar";
import { Footer } from "~/components/Footer";
import Link from "next/link";

export default function Page() {
	return (
		<div className="max-w-5xl flex flex-col mx-auto min-h-screen p-4">
			<NavigationBar />
			<div className="flex flex-col justify-center p-4">
				<h1 className="text-6xl font-bold leading-tight">Portfolio</h1>
				<p className="py-4">
					Take a look at some of my projects, I&apos;ve worked on, frameworks, websites that I&apos;ve made.
				</p>
				<div className="flex flex-col space-y-2">
					<article className="pt-6">
						<div className="space-y-1">
							<h2 className="text-lg tracking-tighter">Projects</h2>
						</div>
						<ul className="space-y-4 py-4">
							<li>
								<div className="p-4 card-body rounded bg-neutral-200 dark:bg-lightDark">
									<Link className="flex flex-col space-y-1.5 !no-underline" href="https://djs-framework.vercel.app">
										<div>
											<span className="font-medium underline underline-offset-4">djs-framework</span>
										</div>
										<span className="text-black dark:text-white">The next generation tool to build Discord bots.</span>
									</Link>
								</div>
							</li>
							<li>
								<div className="p-4 card-body rounded bg-neutral-200 dark:bg-lightDark">
									<Link className="flex flex-col space-y-1.5 !no-underline" href="https://writenote.vercel.app">
										<div>
											<span className="font-medium underline underline-offset-4">writenote</span>
										</div>
										<span className="text-black dark:text-white">Beautifully designed with next.js and shadcn/ui.</span>
									</Link>
								</div>
							</li>
							<li>
								<div className="p-4 card-body rounded bg-neutral-200 dark:bg-lightDark">
									<Link className="flex flex-col space-y-1.5 !no-underline" href="https://anony-bot.vercel.app">
										<div>
											<span className="font-medium underline underline-offset-4">anony</span>
										</div>
										<span className="text-black dark:text-white">
											The only confession Discord bot you&apos;ll ever need.
										</span>
									</Link>
								</div>
							</li>
						</ul>
					</article>
				</div>
			</div>
			<Footer />
		</div>
	);
}
