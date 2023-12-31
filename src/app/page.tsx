import { buttonVariants } from "@/components/ui/button";
import { SiTwitter as Twitter, SiGithub as GitHub } from "@icons-pack/react-simple-icons";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Page() {
	return (
		<div className="mx-auto max-w-2xl place-content-center flex min-h-screen flex-col py-8">
			<header className="container">
				<div className="flex items-center justify-between py-4">
					<a className="flex items-center space-x-2" href="/">
						<div className="flex flex-col space-y-1 text-sm leading-none">
							<span className="text-lg font-bold">almostjohn</span>
							<span>software developer ▲</span>
						</div>
					</a>
					<div className="flex items-center space-x-2">
						<a
							href="https://twitter.com/almostJohn1"
							target="_blank"
							rel="noreferrer"
							className={buttonVariants({ variant: "default" })}
						>
							<Twitter />
						</a>
						<a
							href="https://github.com/almostJohn"
							target="_blank"
							rel="noreferrer"
							className={buttonVariants({ variant: "default" })}
						>
							<GitHub />
						</a>
						<ModeToggle />
					</div>
				</div>
			</header>
			<main className="flex-1">
				<div className="container flex flex-col space-y-2">
					<article className="pt-6">
						<div className="space-y-1">
							<h2 className="font-mono text-lg tracking-tighter">projects</h2>
						</div>
						<ul className="space-y-4 py-4">
							<li>
								<a className="flex flex-col space-y-1.5 !no-underline" href="https://djs-framework.vercel.app">
									<div>
										<span className="font-medium underline underline-offset-4">djs-framework</span>
									</div>
									<span className="text-muted-foreground">the next generation tool to build discord bots.</span>
								</a>
							</li>
							<li>
								<a className="flex flex-col space-y-1.5 !no-underline" href="https://todoappgg.vercel.app/">
									<div>
										<span className="font-medium underline underline-offset-4">todoapp</span>
									</div>
									<span className="text-muted-foreground">beautifully created with next.js and shadcn/ui.</span>
								</a>
							</li>
							<li>
								<a className="flex flex-col space-y-1.5 !no-underline" href="https://github.com/almostJohn/tatsumaki">
									<div>
										<span className="font-medium underline underline-offset-4">tatsumaki</span>
										<span className="ml-2 rounded-lg px-2 py-0.5 font-mono text-xs no-underline bg-primary text-primary-foreground">
											Development
										</span>
									</div>
									<span className="text-muted-foreground">private discord bot used to moderate a discord server.</span>
								</a>
							</li>
							<li>
								<a className="flex flex-col space-y-1.5 !no-underline" href="https://github.com/almostJohn/anony">
									<div>
										<span className="font-medium underline underline-offset-4">anony</span>
										<span className="ml-2 rounded-lg px-2 py-0.5 font-mono text-xs no-underline bg-primary text-primary-foreground">
											Private
										</span>
									</div>
									<span className="text-muted-foreground">a confession discord bot.</span>
								</a>
							</li>
						</ul>
					</article>
				</div>
			</main>
		</div>
	);
}
