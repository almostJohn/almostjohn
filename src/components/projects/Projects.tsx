import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "~/config/site";

export function Projects() {
	return (
		<div className="grid grid-cols-1 gap-4 auto-rows-fr md:grid-cols-2">
			<div className="flex flex-col items-center">
				<Image
					src="/djs-framework.png"
					alt="djs-framework"
					width={500}
					height={500}
					className="rounded-t-md border w-full shadow-md cursor-pointer transition-all hover:scale-110"
					priority
				/>
				<div className="block shadow-md p-4 w-full border-b border-border bg-muted rounded-b-md">
					<div className="flex flex-col space-y-3">
						<Link
							href={siteConfig.projects.djs_framework}
							className="text-center text-2xl font-bold leading-tight tracking-tighter underline-offset-4 transition-transform md:text-4xl md:text-left hover:underline"
						>
							<span className="text-yellow-600">djs</span>-framework
						</Link>
						<p className="text-sm font-light text-muted-foreground">
							A framework for building discord bot the fastest way.
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center">
				<Image
					src="/tscfg.png"
					alt="tscfg"
					width={500}
					height={500}
					className="rounded-t-md border w-full shadow-md cursor-pointer transition-all hover:scale-110"
					priority
				/>
				<div className="block shadow-md p-4 w-full border-b border-border bg-muted rounded-b-md">
					<div className="flex flex-col space-y-3">
						<Link
							href={siteConfig.projects.tsconfig}
							className="text-center text-2xl font-bold leading-tight tracking-tighter underline-offset-4 transition-transform md:text-4xl md:text-left hover:underline"
						>
							<span className="text-blue-600">ts</span>config
						</Link>
						<p className="text-sm font-light text-muted-foreground">
							A typescript configuration that you can copy and paste into your projects.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
