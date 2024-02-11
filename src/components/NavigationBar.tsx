import { Navbar, NavbarStart, NavbarCenter, NavbarEnd } from "./ui/navbar-ui";
import { SiGithub as GitHub } from "@icons-pack/react-simple-icons";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { website } from "~/config/website";
import { cn } from "~/util/cn";

export function NavigationBar() {
	return (
		<Navbar>
			<NavbarStart>
				<div className="dropdown">
					<div
						tabIndex={0}
						role="button"
						className={cn(
							"btn rounded border-0 bg-white hover:bg-neutral-200 text-black dark:text-white dark:bg-dark dark:hover:bg-lightDark transition-colors lg:hidden",
						)}
					>
						<MenuIcon />
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-4 z-[1] p-2 shadow bg-neutral-200 dark:bg-lightDark rounded-md w-52"
					>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/portfolio">Portfolio</Link>
						</li>
						<li>
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>
				<Link className="flex items-center space-x-2 pl-3" href="/">
					<div className="flex flex-col space-y-1 text-sm leading-none">
						<span className="text-lg font-bold">almostJohn</span>
					</div>
				</Link>
			</NavbarStart>
			<NavbarCenter className="hidden lg:flex">
				<ul className="menu menu-horizontal px-2">
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/portfolio">Portfolio</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</NavbarCenter>
			<NavbarEnd>
				<Link
					href={website.social.github}
					className={cn(
						"btn rounded border-0 bg-white hover:bg-neutral-200 text-black dark:text-white dark:bg-dark dark:hover:bg-lightDark transition-colors",
					)}
				>
					<GitHub />
				</Link>
			</NavbarEnd>
		</Navbar>
	);
}
