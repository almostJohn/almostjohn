import * as React from "react";
import Link from "next/link";
import { siteConfig } from "~/config/site";

export function SiteFooter() {
	return (
		<>
			<div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row py-2">
				<p className="text-balance text-center leading-loose text-muted-foreground md:text-left text-sm">
					Built by{" "}
					<Link
						href={siteConfig.social.github}
						rel="noreferrer"
						target="_blank"
						className="font-medium underline underline-offset-4"
					>
						almostJohn
					</Link>
					.
				</p>
			</div>
		</>
	);
}
