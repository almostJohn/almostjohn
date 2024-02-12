import { NavigationBar } from "~/components/NavigationBar";
import { Footer } from "~/components/Footer";
import { ContactForm } from "~/components/ContactForm";

export default function Page() {
	return (
		<div className="max-w-5xl flex flex-col mx-auto min-h-screen p-4">
			<NavigationBar />
			<div className="flex flex-col justify-center p-4">
				<h1 className="text-6xl font-bold leading-tight">Let&apos;s Get In Touch</h1>
				<p className="py-4">
					Want to discuss a project, an idea, an opportunity? Just fill out this form or write me an email.
				</p>
				<ContactForm />
			</div>
			<Footer />
		</div>
	);
}
