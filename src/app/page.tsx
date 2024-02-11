import { NavigationBar } from "~/components/NavigationBar";
import { Hero } from "~/components/Hero";
import { Footer } from "~/components/Footer";

export default function Page() {
	return (
		<div className="max-w-5xl flex flex-col mx-auto min-h-screen p-4">
			<NavigationBar />
			<Hero />
			<Footer />
		</div>
	);
}
