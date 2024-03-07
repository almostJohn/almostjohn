import Link from "next/link";
import { Metadata } from "next";

export const metadata = {
	title: "Portfolio",
} satisfies Metadata;

export default function Page() {
	return (
		<>
			<div className="flex container flex-col space-y-6 py-16">
				<h1 className="font-medium text-2xl mb-8 tracking-tighter">my portfolio</h1>
				<div className="border-b border-border/40">
					<p className="text-muted-foreground">
						Take a look at some of my projects, I&apos;ve worked on, frameworks and websites that I&apos;ve made.
					</p>
				</div>
				<main className="flex-1">
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
										<span className="text-muted-foreground">the next generation tool to build discord bots.</span>
									</Link>
								</li>
								<li>
									<Link className="flex flex-col space-y-1.5 !no-underline" href="https://confessicat.vercel.app">
										<div>
											<span className="font-medium underline underline-offset-4">confessicat</span>
										</div>
										<span className="text-muted-foreground">discord confession bot.</span>
									</Link>
								</li>
							</ul>
						</article>
					</div>
				</main>
			</div>
		</>
	);
}
