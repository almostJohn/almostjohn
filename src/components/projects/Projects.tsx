import { Info, Dot } from "lucide-react";
import { siteConfig } from "~/config/site";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "~/components/ui/hover-card";

export function Projects() {
	const otherProjects = siteConfig.projects.filter((item) => item.title !== "secretthreads");
	const secretFiles = siteConfig.projects.find((item) => item.title === "secretthreads");

	return (
		<div className="flex flex-col space-y-3">
			{secretFiles && (
				<div className="flex items-center space-x-2">
					<a href={secretFiles.href} rel="noreferrer" target="_blank" className="flex items-center space-x-3">
						<Dot />
						<span className="text-blue-500 transition-colors hover:text-blue-700">{secretFiles.title}</span>
					</a>
					<HoverCard>
						<HoverCardTrigger className="cursor-pointer">
							<Info className="size-5 text-neutral-500" />
						</HoverCardTrigger>
						<HoverCardContent className="w-56 text-sm">This is a private repository</HoverCardContent>
					</HoverCard>
				</div>
			)}
			{otherProjects.map((item, i) => (
				<a key={i} href={item.href} rel="noreferrer" target="_blank" className="flex items-center space-x-2">
					<Dot />
					<span className="text-blue-500 transition-colors hover:text-blue-700">{item.title}</span>
				</a>
			))}
		</div>
	);
}
