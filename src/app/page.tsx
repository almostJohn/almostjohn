import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { HeroSection } from "~/components/HeroSection";

export default function Page() {
	return (
		<div className="flex flex-col max-w-2xl min-h-screen m-auto py-8">
			<Header />
			<HeroSection />
			<div className="pt-6">
				<Footer />
			</div>
		</div>
	);
}
