import * as React from "react";
import { Projects } from "~/components/projects";

export default function IndexPage() {
	return (
		<main className="flex-1">
			<div className="container flex flex-col space-y-2">
				<article className="pt-6">
					<Projects />
				</article>
			</div>
		</main>
	);
}
