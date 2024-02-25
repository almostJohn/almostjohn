import {
	SiDiscord as Discord,
	SiX as X,
	SiGithub as GitHub,
	SiInstagram as Instagram,
	SiFacebook as Facebook,
} from "@icons-pack/react-simple-icons";
import { Send } from "lucide-react";
import Link from "next/link";
import { website } from "~/config/website";

export function Footer() {
	return (
		<footer className="container">
			<nav className="flex items-center justify-start gap-5 mt-4">
				<Link href={website.social.email}>
					<Send aria-hidden />
				</Link>
				<Link href={website.social.github}>
					<GitHub aria-hidden />
				</Link>
				<Link href={website.social.twitter}>
					<X aria-hidden />
				</Link>
				<Link href={website.social.discord}>
					<Discord aria-hidden />
				</Link>
				<Link href={website.social.instagram}>
					<Instagram aria-hidden />
				</Link>
				<Link href={website.social.facebook}>
					<Facebook aria-hidden />
				</Link>
			</nav>
			<div className="flex items-center justify-start pt-3">
				<p>© 2023 - 2024 almostJohn</p>
			</div>
		</footer>
	);
}
