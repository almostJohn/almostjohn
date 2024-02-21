import { NavigationBar } from "~/components/NavigationBar";
import { Anony } from "~/components/projects/Anony";
import { DJSFramework } from "~/components/projects/DJSFramework";
import { WriteNote } from "~/components/projects/WriteNote";

export default function Page() {
	return (
		<div className="max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
			<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
				<NavigationBar />
				<section>
					<h1 className="font-medium text-2xl mb-8 tracking-tighter">my portfolio</h1>
					<div className="prose prose-neutral dark:prose-invert">
						<p>Take a look at some of my projects, I&apos;ve worked on, frameworks and websites that I&apos;ve made.</p>
						<hr className="my-6 border-neutral-100 dark:border-neutral-800" />
						<ul className="space-y-4 py-4 not-prose">
							<li>
								<DJSFramework />
							</li>
							<li>
								<WriteNote />
							</li>
							<li>
								<Anony />
							</li>
						</ul>
					</div>
				</section>
			</main>
		</div>
	);
}
