import * as React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import {
	SiNextdotjs as NextJS,
	SiTailwindcss as Tailwind,
	SiTypescript as TypeScript,
	SiVercel as Vercel,
} from "@icons-pack/react-simple-icons";

type ProjectCardProps = {
	image: string;
	href: string;
	title: string;
	description: string;
};

export function ProjectCard({ image, href, title, description }: ProjectCardProps) {
	return (
		<a
			href={href}
			className="block group cursor-pointer p-5 shadow-md border border-border bg-white rounded-md transition-all hover:border-neutral-400"
		>
			<div className="flex flex-col space-y-4">
				<div className="flex items-center">
					<Image
						src={image}
						alt="image"
						width={500}
						height={500}
						className="rounded-md border border-border w-full h-auto cursor-pointer"
						priority
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<div className="flex items-center space-x-2">
						<span className="text-2xl font-bold group-hover:underline">{title}</span>
						<ExternalLink className="hidden h-4 w-4 text-muted-foreground group-hover:block" />
					</div>
					<p className="text-sm font-light text-muted-foreground">{description}</p>
					<div className="flex flex-wrap items-center gap-2">
						<div className="inline-flex items-center p-1 cursor-pointer rounded border bg-muted text-xs font-semibold">
							<NextJS className="h-4 w-4 mr-1" /> Next.js
						</div>
						<div className="inline-flex items-center p-1 cursor-pointer rounded border bg-muted text-xs font-semibold">
							<Tailwind className="h-4 w-4 text-sky-300 mr-1" /> Tailwind
						</div>
						<div className="inline-flex items-center p-1 cursor-pointer rounded border bg-muted text-xs font-semibold">
							<TypeScript className="h-4 w-4 text-blue-500 mr-1" /> TypeScript
						</div>
						<div className="inline-flex items-center p-1 cursor-pointer rounded border bg-muted text-xs font-semibold">
							<Vercel className="h-4 w-4 mr-1" /> Vercel
						</div>
					</div>
				</div>
			</div>
		</a>
	);
}
