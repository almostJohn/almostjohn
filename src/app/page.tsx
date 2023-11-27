import { buttonVariants } from "@/util/cva";
import { SiTwitter as Twitter, SiGithub as GitHub, SiFacebook as Facebook } from "@icons-pack/react-simple-icons";

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
							className={buttonVariants({ variant: "primary" })}
						>
							<Twitter />
						</a>
						<a
							href="https://github.com/almostJohn"
							target="_blank"
							rel="noreferrer"
							className={buttonVariants({ variant: "primary" })}
						>
							<GitHub />
						</a>
						<a
							href="https://facebook.com/alsojohn01"
							target="_blank"
							rel="noreferrer"
							className={buttonVariants({ variant: "primary" })}
						>
							<Facebook />
						</a>
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
									<span className="text-muted-foreground">the next generation tool to build Discord bots.</span>
								</a>
							</li>
							<li>
								<a className="flex flex-col space-y-1.5 !no-underline" href="https://todoappgg.vercel.app/">
									<div>
										<span className="font-medium underline underline-offset-4">todoapp</span>
									</div>
									<span className="text-muted-foreground">
										beautifully created with Next.js, DaisyUI, and TailwindCSS.
									</span>
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
									<span className="text-muted-foreground">private Discord bot used to moderate a Discord server.</span>
								</a>
							</li>
						</ul>
					</article>
				</div>
			</main>
		</div>
	);
}
