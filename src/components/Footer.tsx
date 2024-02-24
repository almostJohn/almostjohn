import { SiDiscord as Discord } from "@icons-pack/react-simple-icons";
import { FacebookIcon, InstagramIcon, Send, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { website } from "~/config/website";

export function Footer() {
	return (
		<footer className="container">
			<nav className="flex items-center justify-start gap-5 mt-4">
				<Link href={website.social.email}>
					<Send aria-hidden />
				</Link>
				<Link href={website.social.twitter}>
					<TwitterIcon aria-hidden />
				</Link>
				<Link href={website.social.discord}>
					<Discord aria-hidden />
				</Link>
				<Link href={website.social.instagram}>
					<InstagramIcon aria-hidden />
				</Link>
				<Link href={website.social.facebook}>
					<FacebookIcon aria-hidden />
				</Link>
			</nav>
			<div className="flex items-center justify-start pt-3">
				<p>© 2023 - 2024 almostJohn</p>
			</div>
		</footer>
	);
}
