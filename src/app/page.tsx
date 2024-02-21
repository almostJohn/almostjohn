import { NavigationBar } from "~/components/NavigationBar";
import { Hero } from "~/components/Hero";

export default function Page() {
	return (
		<div className="max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
			<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
				<NavigationBar />
				<Hero />
			</main>
		</div>
	);
}
