import * as React from "react";
import { Projects } from "~/components/projects";
import { cn } from "~/lib/utils";
import { jetBrainsMono } from "~/util/fonts";

export default function IndexPage() {
	return (
		<main className="flex-1">
			<div className="container flex flex-col space-y-2">
				<div className={cn("pt-6 flex items-center justify-center", jetBrainsMono.className)}>
					<p>
						Hi there, I&apos;m John aka <strong>almostjohn</strong>. I&apos;m 23 y/o aspiring CS student. I like{" "}
						<strong>shuffling cards</strong> and <strong>building things</strong>. I enjoy{" "}
						<strong>language design</strong> and <strong>web development</strong>.
					</p>
				</div>
				<article className="pt-6">
					<Projects />
				</article>
			</div>
		</main>
	);
}
