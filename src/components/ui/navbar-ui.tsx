import type { PropsWithChildren } from "react";

type NavbarUIProps = PropsWithChildren<{
	className?: string;
	id?: string;
}>;

export function Navbar({ id, className, children }: NavbarUIProps) {
	return (
		<div id={id} className={`navbar ${className}`}>
			{children}
		</div>
	);
}

export function NavbarStart({ id, className, children }: NavbarUIProps) {
	return (
		<div id={id} className={`navbar-start ${className}`}>
			{children}
		</div>
	);
}

export function NavbarCenter({ id, className, children }: NavbarUIProps) {
	return (
		<div id={id} className={`navbar-center ${className}`}>
			{children}
		</div>
	);
}

export function NavbarEnd({ id, className, children }: NavbarUIProps) {
	return (
		<div id={id} className={`navbar-end ${className}`}>
			{children}
		</div>
	);
}
