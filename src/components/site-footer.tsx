import * as React from "react";
import Link from "next/link";
import { SiGithub as GitHub, SiDiscord as Discord } from "@icons-pack/react-simple-icons";
import { Twitter, Send } from "lucide-react";
import { FULL_NAME, EMAIL_URL, GITHUB_URL, TWITTER_URL, DISCORD_URL } from "~/util/constants";

export function SiteFooter() {
	return (
		<footer className="container">
			<div className="flex max-w-screen-2xl border-t border-border/40 h-14 pt-4 items-center justify-between">
				<span>{FULL_NAME}</span>
				<div className="flex gap-4">
					<Link href={EMAIL_URL} rel="noreferrer" target="_blank">
						<Send aria-hidden className="h-3.5 w-3.5 text-neutral-500 transition-colors hover:text-neutral-100" />
					</Link>
					<Link href={GITHUB_URL} rel="noreferrer" target="_blank">
						<GitHub aria-hidden className="h-3.5 w-3.5 text-neutral-500 transition-colors hover:text-neutral-100" />
					</Link>
					<Link href={TWITTER_URL} rel="noreferrer" target="_blank">
						<Twitter
							aria-hidden
							className="h-3.5 w-3.5 fill-current text-neutral-500 transition-colors hover:text-neutral-100"
						/>
					</Link>
					<Link href={DISCORD_URL} rel="noreferrer" target="_blank">
						<Discord
							aria-hidden
							className="h-3.5 w-3.5 fill-current text-neutral-500 transition-colors hover:text-neutral-100"
						/>
					</Link>
				</div>
			</div>
		</footer>
	);
}
