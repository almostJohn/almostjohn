import { ContactForm } from "~/components/ContactForm";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { Metadata } from "next";

export const metadata = {
	title: "almostJohn | Contact",
} satisfies Metadata;

export default function Page() {
	return (
		<div className="flex flex-col max-w-2xl min-h-screen m-auto py-8">
			<Header />
			<div className="container">
				<h1 className="font-medium text-2xl mb-8 tracking-tighter">let&apos;s get in touch</h1>
				<div className="prose prose-neutral dark:prose-invert">
					<p>Want to discuss a project, an idea, an opportunity? Just fill out this form or write me an email.</p>
					<hr className="my-6 border-neutral-100 dark:border-neutral-800" />
					<div className="p-5 flex flex-col">
						<ContactForm />
					</div>
				</div>
			</div>
			<div className="pt-6">
				<Footer />
			</div>
		</div>
	);
}
