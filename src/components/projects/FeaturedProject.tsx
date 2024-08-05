import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
	SiNextdotjs as NextJS,
	SiTailwindcss as Tailwind,
	SiTypescript as TypeScript,
	SiVercel as Vercel,
} from "@icons-pack/react-simple-icons";
import { siteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { buttonVariants } from "../ui/button";

export function FeaturedProject() {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
			<Image
				src="/secretposts.png"
				alt="secretposts"
				width={500}
				height={500}
				className="rounded-md border border-border shadow-md cursor-pointer transition-all hover:scale-110"
				priority
			/>
			<div className="flex flex-col space-y-3">
				<Link
					href={siteConfig.projects.secretposts}
					className="text-center text-2xl font-bold leading-tight tracking-tighter underline-offset-4 transition-transform md:text-4xl md:text-left hover:underline"
				>
					secretposts<span className="text-muted-foreground">.link</span>
				</Link>
				<p className="text-lg font-light text-muted-foreground md:text-xl">
					Express yourself freely without revealing who you are.
				</p>
				<div className="flex flex-col space-y-1.5">
					<h3 className="text-sm font-medium">Technologies Used</h3>
					<div className="flex items-center gap-2">
						<div className="inline-flex items-center cursor-pointer p-1 rounded border bg-muted text-xs font-semibold">
							<NextJS className="h-4 w-4 mr-1" /> Next.js
						</div>
						<div className="inline-flex items-center cursor-pointer p-1 rounded border bg-muted text-xs font-semibold">
							<Tailwind className="h-4 w-4 mr-1" /> Tailwind
						</div>
						<div className="inline-flex items-center cursor-pointer p-1 rounded border bg-muted text-xs font-semibold">
							<TypeScript className="h-4 w-4 mr-1" /> TypeScript
						</div>
					</div>
				</div>
				<div className="flex flex-col space-y-1.5">
					<h3 className="text-sm font-medium">Powered By</h3>
					<div className="flex items-center gap-2">
						<div className="inline-flex items-center cursor-pointer p-1 rounded border bg-muted text-xs font-semibold">
							<Vercel className="h-4 w-4 mr-1" /> Vercel
						</div>
					</div>
				</div>
				<div className="flex items-center md:justify-end">
					<Link
						href={siteConfig.projects.secretposts}
						className={cn(
							buttonVariants({
								className:
									"border border-primary text-foreground bg-transparent hover:bg-primary hover:text-primary-foreground",
							}),
						)}
					>
						Visit Website
						<ExternalLink className="h-4 w-4 ml-2" />
					</Link>
				</div>
			</div>
		</div>
	);
}
