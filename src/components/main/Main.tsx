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
								</div>
								<span className="text-slate-500">d.js Framework for creating discord bots.</span>
							</a>
						</li>
						<li>
							<a className="flex flex-col space-y-1.5 !no-underline" href="https://todoappgg.vercel.app/">
								<div>
									<span className="font-medium underline underline-offset-4">todo-app</span>
								</div>
								<span className="text-slate-500">Todo App built with nextjs and tailwindcss.</span>
							</a>
						</li>
						<li>
							<a className="flex flex-col space-y-1.5 !no-underline" href="https://github.com/almostJohn/tatsumaki">
								<div>
									<span className="font-medium underline underline-offset-4">tatsumaki</span>
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
