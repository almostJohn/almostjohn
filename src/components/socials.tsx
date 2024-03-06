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

export function Socials() {
	return (
		<div className="container flex items-center justify-center md:justify-start space-y-12">
			<nav className="gap-5 flex">
				<Link
					href={siteConfig.social.email}
					rel="noreferrer"
					target="_blank"
					className="transition-colors hover:text-foreground/80"
				>
					<Send className="h-6 w-6" />
				</Link>
				<Link
					href={siteConfig.social.github}
					rel="noreferrer"
					target="_blank"
					className="transition-colors hover:text-foreground/80"
				>
					<GitHub className="h-6 w-6" />
				</Link>
				<Link
					href={siteConfig.social.discord}
					rel="noreferrer"
					target="_blank"
					className="transition-colors hover:text-foreground/80"
				>
					<Discord className="h-6 w-6" />
				</Link>
				<Link
					href={siteConfig.social.twitter}
					rel="noreferrer"
					target="_blank"
					className="transition-colors hover:text-foreground/80"
				>
					<X className="h-6 w-6" />
				</Link>
				<Link
					href={siteConfig.social.instagram}
					rel="noreferrer"
					target="_blank"
					className="transition-colors hover:text-foreground/80"
				>
					<Instagram className="h-6 w-6" />
				</Link>
				<Link
					href={siteConfig.social.facebook}
					rel="noreferrer"
					target="_blank"
					className="transition-colors hover:text-foreground/80"
				>
					<Facebook className="h-6 w-6" />
				</Link>
			</nav>
		</div>
	);
}
