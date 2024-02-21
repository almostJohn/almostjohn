import { ContactForm } from "~/components/ContactForm";
import { NavigationBar } from "~/components/NavigationBar";

export default function Page() {
	return (
		<div className="max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
			<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
				<NavigationBar />
				<section>
					<h1 className="font-medium text-2xl mb-8 tracking-tighter">let&apos;s get in touch</h1>
					<div className="prose prose-neutral dark:prose-invert">
						<p>Want to discuss a project, an idea, an opportunity? Just fill out this form or write me an email.</p>
						<hr className="my-6 border-neutral-100 dark:border-neutral-800" />
						<div className="space-y-4 py-4 not-prose">
							<ContactForm />
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
