import * as React from "react";
import { Name } from "~/components/Name";
import { Blogs } from "~/components/blogs/Blogs";
import { Projects } from "~/components/projects/Projects";

export default function IndexPage() {
	return (
		<main className="container flex flex-col flex-1 pt-8">
			<div className="flex flex-col space-y-8">
				<div className="flex flex-col space-y-6">
					<Name />
					<p>
						I&apos;m 24 year old <span className="font-medium">frontend developer</span> and{" "}
						<span className="font-medium">optimist</span>. I enjoy <span className="font-medium">language design</span>{" "}
						and <span className="font-medium">web development</span>. I like playing guitar and listening to music in my
						spare time. If I&apos;m not coding, I&apos;m probably watching anime or working out.
					</p>
				</div>
				<div className="space-y-4">
					<h3 className="font-medium">Writing</h3>
					<Blogs />
				</div>
				<div className="space-y-4">
					<h3 className="font-medium">Codes</h3>
					<Projects />
				</div>
			</div>
		</main>
	);
}
