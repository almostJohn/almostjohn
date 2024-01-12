import Link from "next/link";
import { SiTwitter as Twitter, SiGithub as GitHub } from "@icons-pack/react-simple-icons";
import { website } from "@/config/website";
import { buttonVariants } from "./ui/button";
import { ModeToggle } from "./ui/mode-toggle";

export function Header() {
	return (
		<header className="container">
			<div className="flex items-center justify-between py-4">
				<a className="flex items-center space-x-2" href="/">
					<div className="flex flex-col space-y-1 text-sm leading-none">
						<span className="text-lg font-bold">{website.header.name}</span>
						<span>{website.header.value}</span>
					</div>
				</a>
				<div className="flex items-center space-x-2">
					<Link
						href={website.social.twitter}
						target="_blank"
						rel="noreferrer"
						className={buttonVariants({ variant: "default" })}
					>
						<Twitter />
					</Link>
					<Link
						href={website.social.github}
						target="_blank"
						rel="noreferrer"
						className={buttonVariants({ variant: "default" })}
					>
						<GitHub />
					</Link>
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}
