import { website } from "@/config/website";

export function Contents() {
	return (
		<main className="flex-1">
			<div className="container flex flex-col space-y-2">
				<article className="pt-6">
					<div className="space-y-1">
						<h2 className="font-mono text-lg tracking-tighter">{website.project.title}</h2>
					</div>
					<ul className="space-y-4 py-4">
						<li>
							<a className="flex flex-col space-y-1.5 !no-underline" href={website.project.projects.djs_framework.url}>
								<div>
									<span className="font-medium underline underline-offset-4">
										{website.project.projects.djs_framework.title}
									</span>
								</div>
								<span className="text-muted-foreground">{website.project.projects.djs_framework.description}</span>
							</a>
						</li>
						<li>
							<a className="flex flex-col space-y-1.5 !no-underline" href={website.project.projects.todo.url}>
								<div>
									<span className="font-medium underline underline-offset-4">
										{website.project.projects.todo.title}
									</span>
								</div>
								<span className="text-muted-foreground">{website.project.projects.todo.description}</span>
							</a>
						</li>
						<li>
							<a className="flex flex-col space-y-1.5 !no-underline" href={website.project.projects.anony.url}>
								<div>
									<span className="font-medium underline underline-offset-4">
										{website.project.projects.anony.title}
									</span>
								</div>
								<span className="text-muted-foreground">{website.project.projects.anony.description}</span>
							</a>
						</li>
					</ul>
				</article>
			</div>
		</main>
	);
}
