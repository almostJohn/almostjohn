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
		<footer className="w-full py-6">
			<div className="container flex flex-col items-center gap-5 px-4 text-center md:flex-row md:justify-between md:gap-6 md:px-6">
				<div className="flex items-center gap-5 md:order-1 md:justify-start md:gap-5">
					<Link href={website.social.email}>
						<Send aria-hidden />
						<span className="sr-only">Email</span>
					</Link>
					<Link href={website.social.github}>
						<GitHub aria-hidden />
						<span className="sr-only">GitHub</span>
					</Link>
					<Link href={website.social.twitter}>
						<X aria-hidden />
						<span className="sr-only">X</span>
					</Link>
					<Link href={website.social.discord}>
						<Discord aria-hidden />
						<span className="sr-only">Discord</span>
					</Link>
					<Link href={website.social.instagram}>
						<Instagram aria-hidden />
						<span className="sr-only">Instagram</span>
					</Link>
					<Link href={website.social.facebook}>
						<Facebook aria-hidden />
						<span className="sr-only">Facebook</span>
					</Link>
				</div>
				<div className="flex items-center justify-center tracking-wide md:order-2 md:gap-5 lg:justify-end lg:text-base">
					<p className="md:flex">© 2023 - 2024 almostJohn</p>
				</div>
			</div>
		</footer>
	);
}
