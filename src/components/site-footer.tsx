import * as React from "react";
import Link from "next/link";
import {
	SiDiscord as Discord,
	SiX as X,
	SiInstagram as Instagram,
	SiFacebook as Facebook,
} from "@icons-pack/react-simple-icons";
import { Github, Send } from "lucide-react";
import { siteConfig } from "~/config/site";

export function SiteFooter() {
	return (
		<div className="border-t border-border/40 pt-5 pb-7 flex flex-col items-center md:flex-row md:justify-between">
			<nav className="flex gap-6 mb-4 md:mb-0">
				<Link
					href={siteConfig.social.email}
					rel="noreferrer"
					target="_blank"
					className="transition-colors hover:text-muted-foreground/60"
				>
					<Send className="h-4 w-4" aria-hidden />
				</Link>
				<Link
					href={siteConfig.social.github}
					rel="noreferrer"
					target="_blank"
					className="transition-colors hover:text-muted-foreground/60"
				>
					<Github className="h-4 w-4" aria-hidden />
				</Link>
				<Link
					href={siteConfig.social.discord}
					rel="noreferrer"
					target="_blank"
					className="transition-colors hover:text-muted-foreground/60"
				>
					<Discord className="h-4 w-4" aria-hidden />
				</Link>
				<Link
					href={siteConfig.social.twitter}
					rel="noreferrer"
					target="_blank"
					className="transition-colors hover:text-muted-foreground/60"
				>
					<X className="h-4 w-4" aria-hidden />
				</Link>
				<Link
					href={siteConfig.social.instagram}
					rel="noreferrer"
					target="_blank"
					className="transition-colors hover:text-muted-foreground/60"
				>
					<Instagram className="h-4 w-4" aria-hidden />
				</Link>
				<Link
					href={siteConfig.social.facebook}
					rel="noreferrer"
					target="_blank"
					className="transition-colors hover:text-muted-foreground/60"
				>
					<Facebook className="h-4 w-4" aria-hidden />
				</Link>
			</nav>
			<div className="text-center md:text-right">
				<p className="text-sm text-muted-foreground">&copy; 2023 - 2024 almostJohn</p>
			</div>
		</div>
	);
}
