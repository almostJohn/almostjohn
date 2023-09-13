import { SiDiscord, SiGithub, SiX, SiInstagram, SiFacebook } from "@icons-pack/react-simple-icons";
import { Send } from "lucide-react";

export default function Page() {
	return (
		<div className="m-auto max-w-2xl min-h-screen flex flex-col place-content-center px-8 py-16 lg:px-8 lg:py-0">
			<main>
				<section>
					<h1 className="text-6xl font-bold leading-tight">
						Hey, I&apos;m <span className="text-sky-500">John</span>!
					</h1>
					<h2 className="text-2xl font-light">Software Developer</h2>
				</section>
			</main>
			<footer>
				<nav className="mt-12 flex gap-4">
					<div className="tooltip tooltip-bottom" data-tip="Email">
						<a
							aria-label="Email"
							href="mailto:garcia.johngale@gmail.com"
							rel="external noopener noreferrer"
							target="_blank"
							title="Email"
						>
							<Send />
						</a>
					</div>
					<div className="tooltip tooltip-bottom" data-tip="GitHub">
						<a
							aria-label="GitHub"
							href="https://github.com/almostJohn"
							rel="external noopener noreferrer"
							target="_blank"
							title="GitHub"
						>
							<SiGithub />
						</a>
					</div>
					<div className="tooltip tooltip-bottom" data-tip="Discord">
						<a
							aria-label="Discord"
							href="https://discord.com/users/996354867708841984"
							rel="external noopener noreferrer"
							target="_blank"
							title="Discord"
						>
							<SiDiscord />
						</a>
					</div>
					<div className="tooltip tooltip-bottom" data-tip="Twitter">
						<a
							aria-label="Twitter"
							href="https://twitter.com/almostJohn1"
							rel="external noopener noreferrer"
							target="_blank"
							title="Twitter"
						>
							<SiX />
						</a>
					</div>
					<div className="tooltip tooltip-bottom" data-tip="Instagram">
						<a
							aria-label="Instagram"
							href="https://instagram.com/almostjohn1"
							rel="external noopener noreferrer"
							target="_blank"
							title="Instagram"
						>
							<SiInstagram />
						</a>
					</div>
					<div className="tooltip tooltip-bottom" data-tip="Facebook">
						<a
							aria-label="Facebook"
							href="https://facebook.com/alsojohn01"
							rel="external noopener noreferrer"
							target="_blank"
							title="Facebook"
						>
							<SiFacebook />
						</a>
					</div>
				</nav>
			</footer>
		</div>
	);
}
