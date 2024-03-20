import * as React from "react";
import Link from "next/link";
import { cn } from "~/lib/utils";
import { siteConfig } from "~/config/site";

export default function Page() {
	return (
		<main className="flex-1">
			<div className="flex container flex-col space-y-6 py-16">
				<article className="pt-1">
					<div className="space-y-1">
						<div className="prose dark:prose-invert">
							<p>
								<small className="text-muted-foreground">IPA &nbsp; /&apos; olmos jαn/ — no meaning.</small>
								<br />
								Hi there, I&apos;m John, I am a 23 y/o aspiring CS student. I write about topics in{" "}
								<strong>tech</strong> and <strong>web development</strong> that make me optimistic about the future. I
								enjoy building things, web development, and I live in the terminal.
							</p>
							<div className="mt-12" />
							<h2 className="text-xl leading-tight">Projects</h2>
							<div className="flex-1 not-prose">
								<div className="flex flex-col space-y-2">
									<article>
										<ul className="space-y-4 py-4">
											{siteConfig.projects.map((project) => (
												<li key={project.href}>
													<Link className="flex flex-col space-y-1.5 !no-underline" href={project.href}>
														<div>
															<span className={cn("font-medium underline underline-offset-4 text-foreground")}>
																{project.title}
															</span>
														</div>
														<span className="text-muted-foreground">{project.description}</span>
													</Link>
												</li>
											))}
										</ul>
									</article>
								</div>
							</div>
							<div className="mt-12" />
							<p>
								If you want to get to know me better, please feel free to reach out to me via my social media handles
								below or by <Link href="/contact">contacting me</Link> directly.
							</p>
						</div>
					</div>
				</article>
			</div>
		</main>
	);
}
