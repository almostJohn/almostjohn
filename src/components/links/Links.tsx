import * as React from "react";
import { ExternalLink } from "lucide-react";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { jetBrainsMono } from "~/lib/fonts";

export function Links() {
	return (
		<div className={cn("flex items-center gap-2", jetBrainsMono.className)}>
			<a
				href={siteConfig.socialLinks.email}
				rel="noreferrer"
				target="_blank"
				className="group flex items-center space-x-1.5"
			>
				<span className="font-medium tracking-tight group-hover:underline">email</span>
				<ExternalLink className="hidden h-3.5 w-3.5 text-neutral-500 shrink-0 group-hover:block" />
			</a>
			/
			<a
				href={siteConfig.socialLinks.twitter}
				rel="noreferrer"
				target="_blank"
				className="group flex items-center space-x-1.5"
			>
				<span className="font-medium tracking-tight group-hover:underline">twitter</span>
				<ExternalLink className="hidden h-3.5 w-3.5 text-neutral-500 shrink-0 group-hover:block" />
			</a>
			/
			<a
				href={siteConfig.socialLinks.github}
				rel="noreferrer"
				target="_blank"
				className="group flex items-center space-x-1.5"
			>
				<span className="font-medium tracking-tight group-hover:underline">github</span>
				<ExternalLink className="hidden h-3.5 w-3.5 text-neutral-500 shrink-0 group-hover:block" />
			</a>
		</div>
	);
}
