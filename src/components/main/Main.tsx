export function Main() {
	return (
		<main className="flex-1">
			<div className="container mr-auto ml-auto pr-[2rem] pl-[2rem] flex flex-col space-y-2">
				<article className="pt-6">
					<div className="space-y-1">
						<h2 className="font-mono text-lg tracking-tighter">projects</h2>
					</div>
					<ul className="space-y-4 py-4">
						<li>
							<a className="flex flex-col space-y-1.5 !no-underline" href="https://github.com/almostJohn/djs-framework">
								<div>
									<span className="font-medium underline underline-offset-4">djs-framework</span>
									<span className="ml-2 rounded-lg px-2 py-0.5 font-mono text-xs no-underline bg-neutral-content text-primary-foreground dark:bg-neutral">
										Framework
									</span>
								</div>
								<span className="text-slate-500">A next generation framework for creating discord bots.</span>
							</a>
						</li>
						<li>
							<a className="flex flex-col space-y-1.5 !no-underline" href="https://todoappgg.vercel.app/">
								<div>
									<span className="font-medium underline underline-offset-4">todo-app</span>
									<span className="ml-2 rounded-lg px-2 py-0.5 font-mono text-xs no-underline bg-success text-primary-foreground">
										Active
									</span>
								</div>
								<span className="text-slate-500">Beautifully created with NextJS and TailwindCSS.</span>
							</a>
						</li>
						<li>
							<a className="flex flex-col space-y-1.5 !no-underline" href="https://github.com/almostJohn/tatsumaki">
								<div>
									<span className="font-medium underline underline-offset-4">tatsumaki</span>
									<span className="ml-2 rounded-lg px-2 py-0.5 font-mono text-xs no-underline bg-neutral-content text-primary-foreground dark:bg-neutral">
										In Development
									</span>
								</div>
								<span className="text-slate-500">A private discord bot made to moderate a discord server.</span>
							</a>
						</li>
					</ul>
				</article>
			</div>
		</main>
	);
}
