import { siteConfig } from "~/config/site";

export function Footer() {
	return (
		<footer className="mt-12 text-center">
			<div className="flex h-16 items-center justify-center space-x-4 tracking-tight">
				<a
					href={siteConfig.socialLinks.twitter}
					rel="noreferrer"
					target="_blank"
					className="text-neutral-500 transition-colors hover:text-blue-500"
				>
					twitter
				</a>
				<a
					href={siteConfig.socialLinks.email}
					rel="noreferrer"
					target="_blank"
					className="text-neutral-500 transition-colors hover:text-blue-500"
				>
					email
				</a>
				<a
					href={siteConfig.socialLinks.github}
					rel="noreferrer"
					target="_blank"
					className="text-neutral-500 transition-colors hover:text-blue-500"
				>
					github
				</a>
				<a
					href={siteConfig.socialLinks.facebook}
					rel="noreferrer"
					target="_blank"
					className="text-neutral-500 transition-colors hover:text-blue-500"
				>
					facebook
				</a>
			</div>
		</footer>
	);
}
