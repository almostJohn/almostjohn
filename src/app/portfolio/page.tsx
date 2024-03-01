import Link from "next/link";
import { Metadata } from "next";

export const metadata = {
	title: "Portfolio",
} satisfies Metadata;

export default function Page() {
	return (
		<div className="container">
			<h1 className="font-medium text-2xl mb-8 tracking-tighter">my portfolio</h1>
			<div className="prose prose-neutral dark:prose-invert">
				<p>Take a look at some of my projects, I&apos;ve worked on, frameworks and websites that I&apos;ve made.</p>
				<hr className="my-6 border-neutral-100 dark:border-neutral-800" />
				<main className="flex-1 not-prose">
					<div className="flex flex-col space-y-2">
						<article className="pt-6">
							<div className="space-y-1">
								<h2 className="font-mono text-lg tracking-tighter">projects</h2>
							</div>
							<ul className="space-y-4 py-4">
								<li>
									<Link className="flex flex-col space-y-1.5 !no-underline" href="https://djs-framework.vercel.app">
										<div>
											<span className="font-medium underline underline-offset-4">djs-framework</span>
										</div>
										<span className="text-muted-foreground">next generation tool to build discord bots.</span>
									</Link>
								</li>
								<li>
									<Link className="flex flex-col space-y-1.5 !no-underline" href="https://writenote.vercel.app">
										<div>
											<span className="font-medium underline underline-offset-4">writenote</span>
										</div>
										<span className="text-muted-foreground">beautifully designed using next.js and shadcn/ui.</span>
									</Link>
								</li>
								<li>
									<Link className="flex flex-col space-y-1.5 !no-underline" href="https://anony-bot.vercel.app">
										<div>
											<span className="font-medium underline underline-offset-4">anony</span>
										</div>
										<span className="text-muted-foreground">confession discord bot.</span>
									</Link>
								</li>
							</ul>
						</article>
					</div>
				</main>
			</div>
		</div>
	);
}
