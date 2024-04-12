import * as React from "react";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";
import { cn } from "~/lib/utils";
import { SiGithub as Github } from "@icons-pack/react-simple-icons";
import { Twitter } from "lucide-react";

export function SiteHeader() {
	return (
		<div className="container">
			<div className="flex items-center justify-between py-4">
				<Link className="flex items-center space-x-2" href="/">
					<div className="flex flex-col space-y-1 text-sm leading-none">
						<span className="text-lg font-bold">{siteConfig.name}</span>
						<span>{siteConfig.subName}</span>
					</div>
				</Link>
				<div className="flex items-center space-x-2">
					<Link
						href={siteConfig.social.twitter}
						className={cn(buttonVariants({ variant: "ghost", size: "icon", className: "h-7 w-7" }))}
					>
						<Twitter className="h-4 w-4 fill-current" />
					</Link>
					<Link
						href={siteConfig.social.github}
						className={cn(buttonVariants({ variant: "ghost", size: "icon", className: "h-7 w-7" }))}
					>
						<Github className="h-4 w-4 fill-current" />
					</Link>
					<ModeToggle />
				</div>
			</div>
		</div>
	);
}
