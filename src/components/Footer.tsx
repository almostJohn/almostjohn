import {
	SiX as X,
	SiInstagram as Instagram,
	SiFacebook as Facebook,
	SiDiscord as Discord,
} from "@icons-pack/react-simple-icons";
import { Send } from "lucide-react";
import Link from "next/link";
import { website } from "~/config/website";

export function Footer() {
	return (
		<footer className="footer items-center mt-8 p-4 gap-4">
			<nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-start">
				<Link
					aria-label="Email"
					href={website.social.email}
					rel="external noopener noreferrer"
					target="_blank"
					title="Email"
				>
					<Send aria-hidden />
				</Link>
				<Link
					aria-label="Discord"
					href={website.social.discord}
					rel="external noopener noreferrer"
					target="_blank"
					title="Discord"
				>
					<Discord aria-hidden />
				</Link>
				<Link
					aria-label="Twitter"
					href={website.social.twitter}
					rel="external noopener noreferrer"
					target="_blank"
					title="Twitter"
				>
					<X aria-hidden />
				</Link>
				<Link
					aria-label="Instagram"
					href={website.social.instagram}
					rel="external noopener noreferrer"
					target="_blank"
					title="Instagram"
				>
					<Instagram aria-hidden />
				</Link>
				<Link
					aria-label="Facebook"
					href={website.social.facebook}
					rel="external noopener noreferrer"
					target="_blank"
					title="Facebook"
				>
					<Facebook aria-hidden />
				</Link>
			</nav>
			<aside className="items-center grid-flow-col md:place-self-center md:justify-self-end">
				<p className="text-[17px] font-light">© 2023-2024 almostJohn</p>
			</aside>
		</footer>
	);
}
