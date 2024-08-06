import * as React from "react";
import { Send } from "lucide-react";
import {
	SiGithub as GitHub,
	SiDiscord as Discord,
	SiInstagram as Instagram,
	SiFacebook as Facebook,
	SiTwitter as Twitter,
} from "@icons-pack/react-simple-icons";
import { siteConfig } from "~/config/site";

export function Footer() {
	return (
		<footer className="w-full bg-transparent">
			<div className="container flex max-w-screen-2xl p-10 flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
				<nav className="flex items-center gap-5">
					<a
						aria-label="Email"
						title="Email"
						href={siteConfig.socialLinks.email}
						rel="noreferrer"
						target="_blank"
						className="transition-colors hover:text-foreground/90"
					>
						<Send className="h-7 w-7" />
					</a>
					<a
						aria-label="GitHub"
						title="GitHub"
						href={siteConfig.socialLinks.github}
						rel="noreferrer"
						target="_blank"
						className="transition-colors hover:text-foreground/90"
					>
						<GitHub className="h-7 w-7" />
					</a>
					<a
						aria-label="Discord"
						title="Discord"
						href={siteConfig.socialLinks.discord}
						rel="noreferrer"
						target="_blank"
						className="transition-colors hover:text-foreground/90"
					>
						<Discord className="h-7 w-7" />
					</a>
					<a
						aria-label="Twitter"
						title="Twitter"
						href={siteConfig.socialLinks.twitter}
						rel="noreferrer"
						target="_blank"
						className="transition-colors hover:text-foreground/90"
					>
						<Twitter className="h-7 w-7" />
					</a>
					<a
						aria-label="Instagram"
						title="Instagram"
						href={siteConfig.socialLinks.instagram}
						rel="noreferrer"
						target="_blank"
						className="transition-colors hover:text-foreground/90"
					>
						<Instagram className="h-7 w-7" />
					</a>
					<a
						aria-label="Facebook"
						title="Facebook"
						href={siteConfig.socialLinks.facebook}
						rel="noreferrer"
						target="_blank"
						className="transition-colors hover:text-foreground/90"
					>
						<Facebook className="h-7 w-7" />
					</a>
				</nav>
				<div className="flex items-center">
					<p className="text-muted-foreground">&copy; 2023 - 2024 almostJohn</p>
				</div>
			</div>
		</footer>
	);
}
