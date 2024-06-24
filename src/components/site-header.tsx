import * as React from "react";
import Link from "next/link";
import { SCREEN_NAME } from "~/util/constants";

export function SiteHeader() {
	return (
		<header className="container">
			<div className="flex max-w-screen-2xl h-14 items-center justify-between">
				<div className="flex items-center">
					<Link href="/" className="font-medium text-neutral-500">
						{SCREEN_NAME}
					</Link>
				</div>
				<div className="flex items-center space-x-4">
					<Link href="/blog" className="font-medium text-neutral-500 hover:underline hover:underline-offset-4">
						blog
					</Link>
					<Link href="/music" className="font-medium text-neutral-500 hover:underline hover:underline-offset-4">
						music
					</Link>
				</div>
			</div>
		</header>
	);
}
