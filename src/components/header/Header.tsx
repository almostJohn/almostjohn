import { SiGithub, SiX, SiFacebook } from "@icons-pack/react-simple-icons";
import { Send } from "lucide-react";

export function Header() {
	return (
		<header className="container mr-auto ml-auto pr-[2rem] pl-[2rem] block">
			<div className="flex items-center justify-between py-4">
				<a className="flex items-center space-x-2" href="/">
					<div className="flex flex-col space-y-1 text-sm leading-none">
						<span className="text-lg font-bold">almostjohn</span>
						<span>software developer ▲</span>
					</div>
				</a>
				<div className="flex items-center space-x-2 gap-[10px]">
					<button className="btn btn-ghost btn-sm">
						<a
							aria-label="Email"
							href="mailto:garcia.johngale@gmail.com"
							rel="external noopener noreferrer"
							target="_blank"
							title="Email"
						>
							<Send size="15px" />
						</a>
					</button>
					<button className="btn btn-ghost btn-sm">
						<a
							aria-label="GitHub"
							href="https://github.com/almostJohn"
							rel="external noopener noreferrer"
							target="_blank"
							title="GitHub"
						>
							<SiGithub size="15px" />
						</a>
					</button>
					<button className="btn btn-ghost btn-sm">
						<a
							aria-label="Twitter"
							href="https://twitter.com/almostJohn1"
							rel="external noopener noreferrer"
							target="_blank"
							title="Twitter"
						>
							<SiX size="15px" />
						</a>
					</button>
					<button className="btn btn-ghost btn-sm">
						<a
							aria-label="Facebook"
							href="https://facebook.com/alsojohn01"
							rel="external noopener noreferrer"
							target="_blank"
							title="Twitter"
						>
							<SiFacebook size="15px" />
						</a>
					</button>
				</div>
			</div>
		</header>
	);
}
