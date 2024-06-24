import * as React from "react";
import { Projects } from "~/components/projects";
import { FeaturedBlogs } from "~/components/blogs";

export default function IndexPage() {
	return (
		<main className="flex-1 pb-16">
			<div className="container flex flex-col space-y-2">
				<div className="pt-6 flex flex-col space-y-2">
					<p>
						<small className="text-neutral-500">IPA &nbsp; /`almostjohn/ — no meaning, i made it up.</small>
						<br />
						Hi there, I&apos;m <strong>John</strong> aka <strong>almostjohn</strong>. I&apos;m 23 y/o aspiring CS
						student. I like <strong>shuffling cards</strong> and <strong>building things</strong>. I enjoy{" "}
						<strong>language design</strong> and <strong>web development</strong>.
					</p>
				</div>
				<div className="flex flex-col py-3">
					<Projects />
					<div className="mt-6" />
					<FeaturedBlogs />
				</div>
			</div>
		</main>
	);
}
