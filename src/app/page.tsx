import {
	SiDiscord as Discord,
	SiGithub as GitHub,
	SiTwitter as Twitter,
	SiInstagram as Instagram,
	SiFacebook as Facebook,
} from "@icons-pack/react-simple-icons";
import { Send } from "lucide-react";
import { Lanyard } from "@/components/lanyard/Lanyard";

export default function Page() {
	return (
		<div className="min-h-screen">
			<div className="mx-auto max-w-2xl min-h-screen flex flex-col place-content-center px-8 py-16 lg:px-6 lg:py-0">
				<main>
					<section>
						<h1 className="text-6xl font-bold leading-tight">
							Hey, I&apos;m <span className="text-sky-500">John</span>!
						</h1>
						<h2 className="text-2xl font-light">Software Developer</h2>
					</section>
					<Lanyard />
				</main>
				<footer>
					<nav className="mt-12 flex gap-4">
						<a
							aria-label="Email"
							href="mailto:garcia.johngale@gmail.com"
							rel="external noopener noreferrer"
							target="_blank"
							title="Email"
						>
							<Send aria-hidden />
						</a>
						<a
							aria-label="GitHub"
							href="https://github.com/almostJohn"
							rel="external noopener noreferrer"
							target="_blank"
							title="GitHub"
						>
							<GitHub aria-hidden />
						</a>
						<a
							aria-label="Discord"
							href="https://discord.com/users/996354867708841984"
							rel="external noopener noreferrer"
							target="_blank"
							title="Discord"
						>
							<Discord aria-hidden />
						</a>
						<a
							aria-label="Twitter"
							href="https://twitter.com/almostJohn1"
							rel="external noopener noreferrer"
							target="_blank"
							title="Twitter"
						>
							<Twitter aria-hidden />
						</a>
						<a
							aria-label="Instagram"
							href="https://instagram.com/almostjohn1"
							rel="external noopener noreferrer"
							target="_blank"
							title="Instagram"
						>
							<Instagram aria-hidden />
						</a>
						<a
							aria-label="Facebook"
							href="https://facebook.com/alsojohn01"
							rel="external noopener noreferrer"
							target="_blank"
							title="Facebook"
						>
							<Facebook aria-hidden />
						</a>
					</nav>
				</footer>
			</div>
		</div>
	);
}
