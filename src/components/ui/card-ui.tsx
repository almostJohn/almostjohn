import type { PropsWithChildren } from "react";

type CardProps = PropsWithChildren<{
	className?: string;
	id?: string;
}>;

export function Card({ id, className, children }: CardProps) {
	return (
		<div id={id} className={`card ${className}`}>
			{children}
		</div>
	);
}

export function CardBody({ id, className, children }: CardProps) {
	return (
		<div id={id} className={`card-body ${className}`}>
			{children}
		</div>
	);
}

export function CardTitle({ id, className, children }: CardProps) {
	return (
		<h2 id={id} className={`card-title ${className}`}>
			{children}
		</h2>
	);
}

export function CardDescription({ id, className, children }: CardProps) {
	return (
		<p id={id} className={className}>
			{children}
		</p>
	);
}

export function CardActions({ id, className, children }: CardProps) {
	return (
		<div id={id} className={`card-actions ${className}`}>
			{children}
		</div>
	);
}
