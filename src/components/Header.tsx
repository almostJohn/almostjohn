import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export function Header() {
	return (
		<header className="container">
			<div className="flex items-center justify-between py-4">
				<div className="flex items-center space-x-2 -ml-[8px] mb-16 tracking-tight">
					<nav className="flex flex-row space-y-1 items-start leading-none">
						<div className="flex flex-row space-x-0 pr-10">
							<Link
								className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
								href="/"
							>
								home
							</Link>
							<Link
								className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
								href="/portfolio"
							>
								portfolio
							</Link>
							<Link
								className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
								href="/contact"
							>
								contact
							</Link>
						</div>
					</nav>
				</div>
				<div className="flex items-center space-x-2 mb-16">
					<ModeToggle />
				</div>
			</div>
		</header>
	);
}
