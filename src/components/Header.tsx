import Link from "next/link";

export function Header() {
	return (
		<header className="container">
			<aside className="-ml-[8px] mb-16 tracking-tight">
				<div className="lg:sticky lg:top-20">
					<nav className="flex flex-row items-start relative px-0 pb-0 md:overflow-auto scroll-pr-6 md:relative">
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
			</aside>
		</header>
	);
}
