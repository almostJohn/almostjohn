import * as React from "react";
import Link from "next/link";
import {
	SiGithub as GitHub,
	SiInstagram as Instagram,
	SiFacebook as Facebook,
	SiDiscord as Discord,
} from "@icons-pack/react-simple-icons";
import { Twitter, ArrowUpRight } from "lucide-react";
import { DISCORD_URL, FACEBOOK_URL, GITHUB_URL, INSTAGRAM_URL, TWITTER_URL } from "~/util/constants";

export function Socials() {
	return (
		<div className="flex flex-col gap-4">
			<Link
				href={GITHUB_URL}
				rel="noreferrer"
				target="_blank"
				className="group inline-flex items-center justify-between px-4 py-2 rounded border border-neutral-700 bg-neutral-800 font-medium text-sm"
			>
				<div className="flex items-center space-x-3">
					<GitHub aria-hidden className="h-5 w-5 shrink-0" />
					<h2>GitHub</h2>
				</div>
				<ArrowUpRight className="h-5 w-5 transition-transform group-hover:-rotate-12" />
			</Link>
			<Link
				href={TWITTER_URL}
				rel="noreferrer"
				target="_blank"
				className="group inline-flex items-center justify-between px-4 py-2 rounded border border-neutral-700 bg-neutral-800 font-medium text-sm"
			>
				<div className="flex items-center space-x-3">
					<Twitter aria-hidden className="h-5 w-5 fill-current shrink-0" />
					<h2>Twitter</h2>
				</div>
				<ArrowUpRight className="h-5 w-5 transition-transform group-hover:-rotate-12" />
			</Link>
			<Link
				href={DISCORD_URL}
				rel="noreferrer"
				target="_blank"
				className="group inline-flex items-center justify-between px-4 py-2 rounded border border-neutral-700 bg-neutral-800 font-medium text-sm"
			>
				<div className="flex items-center space-x-3">
					<Discord aria-hidden className="h-5 w-5 shrink-0" />
					<h2>Discord</h2>
				</div>
				<ArrowUpRight className="h-5 w-5 transition-transform group-hover:-rotate-12" />
			</Link>
			<Link
				href={INSTAGRAM_URL}
				rel="noreferrer"
				target="_blank"
				className="group inline-flex items-center justify-between px-4 py-2 rounded border border-neutral-700 bg-neutral-800 font-medium text-sm"
			>
				<div className="flex items-center space-x-3">
					<Instagram aria-hidden className="h-5 w-5 shrink-0" />
					<h2>Instagram</h2>
				</div>
				<ArrowUpRight className="h-5 w-5 transition-transform group-hover:-rotate-12" />
			</Link>
			<Link
				href={FACEBOOK_URL}
				rel="noreferrer"
				target="_blank"
				className="group inline-flex items-center justify-between px-4 py-2 rounded border border-neutral-700 bg-neutral-800 font-medium text-sm"
			>
				<div className="flex items-center space-x-3">
					<Facebook aria-hidden className="h-5 w-5 shrink-0" />
					<h2>Facebook</h2>
				</div>
				<ArrowUpRight className="h-5 w-5 transition-transform group-hover:-rotate-12" />
			</Link>
		</div>
	);
}
