import * as React from "react";
import Link from "next/link";
import {
	SiDiscord as Discord,
	SiGithub as GitHub,
	SiX as X,
	SiInstagram as Instagram,
	SiFacebook as Facebook,
} from "@icons-pack/react-simple-icons";
import { Send } from "lucide-react";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";

export function SiteFooter() {
	return (
		<div className="container border-t border-border/40 p-4 flex flex-col items-center md:flex-row md:justify-between">
			<nav className="flex gap-6 mb-4 md:mb-0">
				<Link
					href={siteConfig.social.email}
					rel="noreferrer"
					target="_blank"
					className={cn("transition-colors hover:text-foreground/60")}
				>
					<Send className="h-4 w-4" aria-hidden />
				</Link>
				<Link
					href={siteConfig.social.github}
					rel="noreferrer"
					target="_blank"
					className={cn("transition-colors hover:text-foreground/60")}
				>
					<GitHub className="h-4 w-4" aria-hidden />
				</Link>
				<Link
					href={siteConfig.social.discord}
					rel="noreferrer"
					target="_blank"
					className={cn("transition-colors hover:text-foreground/60")}
				>
					<Discord className="h-4 w-4" aria-hidden />
				</Link>
				<Link
					href={siteConfig.social.twitter}
					rel="noreferrer"
					target="_blank"
					className={cn("transition-colors hover:text-foreground/60")}
				>
					<X className="h-4 w-4" aria-hidden />
				</Link>
				<Link
					href={siteConfig.social.instagram}
					rel="noreferrer"
					target="_blank"
					className={cn("transition-colors hover:text-foreground/60")}
				>
					<Instagram className="h-4 w-4" aria-hidden />
				</Link>
				<Link
					href={siteConfig.social.facebook}
					rel="noreferrer"
					target="_blank"
					className={cn("transition-colors hover:text-foreground/60")}
				>
					<Facebook className="h-4 w-4" aria-hidden />
				</Link>
			</nav>
			<div className="text-center md:text-right">
				<p className="text-[15px]/relaxed leading-loose text-muted-foreground">&copy; 2023 - 2024 almostJohn</p>
			</div>
		</div>
	);
}
