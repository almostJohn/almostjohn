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
		<div className="container my-8 flex flex-col items-center md:flex-row md:justify-between">
			<nav className="flex gap-5 mb-4 md:mb-0">
				<Link
					href={siteConfig.social.email}
					rel="noreferrer"
					target="_blank"
					className={cn("transition-colors hover:text-foreground/60")}
				>
					<Send aria-hidden />
				</Link>
				<Link
					href={siteConfig.social.github}
					rel="noreferrer"
					target="_blank"
					className={cn("transition-colors hover:text-foreground/60")}
				>
					<GitHub aria-hidden />
				</Link>
				<Link
					href={siteConfig.social.discord}
					rel="noreferrer"
					target="_blank"
					className={cn("transition-colors hover:text-foreground/60")}
				>
					<Discord aria-hidden />
				</Link>
				<Link
					href={siteConfig.social.twitter}
					rel="noreferrer"
					target="_blank"
					className={cn("transition-colors hover:text-foreground/60")}
				>
					<X aria-hidden />
				</Link>
				<Link
					href={siteConfig.social.instagram}
					rel="noreferrer"
					target="_blank"
					className={cn("transition-colors hover:text-foreground/60")}
				>
					<Instagram aria-hidden />
				</Link>
				<Link
					href={siteConfig.social.facebook}
					rel="noreferrer"
					target="_blank"
					className={cn("transition-colors hover:text-foreground/60")}
				>
					<Facebook aria-hidden />
				</Link>
			</nav>
			<div className="text-center md:text-right">
				<p className="text-[15px]/relaxed leading-loose text-muted-foreground">
					&copy; 2023 - 2024{" "}
					<Link
						href={siteConfig.social.github}
						rel="noreferrer"
						target="_blank"
						className="font-medium underline underline-offset-4"
					>
						almostJohn
					</Link>
				</p>
			</div>
		</div>
	);
}
