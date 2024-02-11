import { NavigationBar } from "~/components/NavigationBar";
import { Footer } from "~/components/Footer";
import { ProjectOne } from "~/components/ProjectOne";
import { ProjectTwo } from "~/components/ProjectTwo";
import { ProjectThree } from "~/components/ProjectThree";

export default function Page() {
	return (
		<div className="max-w-5xl flex flex-col mx-auto min-h-screen p-4">
			<NavigationBar />
			<div className="flex flex-col justify-center p-4">
				<h1 className="text-6xl font-bold leading-tight">Portfolio</h1>
				<p className="py-4">
					Take a look at some of my projects, I&apos;ve worked on, frameworks, websites that I&apos;ve made.
				</p>
				<ProjectOne />
				<ProjectTwo />
				<ProjectThree />
			</div>
			<Footer />
		</div>
	);
}
