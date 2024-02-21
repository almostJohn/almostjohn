import Link from "next/link";
import { SiNextdotjs as NextJS, SiReact as React } from "@icons-pack/react-simple-icons";
import { GitHubSocial } from "./socials/GitHub";
import { DiscordSocial } from "./socials/Discord";
import { TwitterSocial } from "./socials/Twitter";
import { FacebookSocial } from "./socials/Facebook";
import { InstagramSocial } from "./socials/Instagram";

export function Hero() {
	return (
		<section>
			<h1 className="font-medium text-2xl mb-8 tracking-tighter">
				hey, I&apos;m <span className="text-sky-500">john</span> 👋
			</h1>
			<p className="prose prose-neutral dark:prose-invert">
				I am a 23-year-old frontend developer from the Philippines with a passion in web development using{" "}
				<Link
					href="https://nextjs.org"
					className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
				>
					<NextJS width={14} height={14} className="!mr-1" /> Next.js
				</Link>
				, an open source web framework built with{" "}
				<Link
					href="https://react.dev"
					className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
				>
					<React width={14} height={14} className="!mr-1 text-sky-700" /> React
				</Link>
				. Feel free to get in touch with me via my socials below or check out my portfolio.
			</p>
			<div className="my-8 flex flex-col gap-4 w-full">
				<div className="group flex w-full">
					<GitHubSocial />
				</div>
				<div className="group flex w-full">
					<DiscordSocial />
				</div>
				<div className="group flex w-full">
					<TwitterSocial />
				</div>
				<div className="group flex w-full">
					<InstagramSocial />
				</div>
				<div className="group flex w-full">
					<FacebookSocial />
				</div>
			</div>
		</section>
	);
}
