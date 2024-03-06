import * as React from "react";
import { ContactForm } from "~/components/contact-form";
import { Metadata } from "next";

export const metadata = {
	title: "Contact",
} satisfies Metadata;

export default function Page() {
	return (
		<>
			<div className="flex container flex-col space-y-6 py-16">
				<h1 className="font-medium text-2xl mb-8 tracking-tighter">let&apos;s get in touch</h1>
				<div>
					<p className="text-muted-foreground">
						Want to discuss a project, an idea, an opportunity? Just fill out this form or write me an email.
					</p>
					<hr className="my-6 border-foreground" />
					<div className="p-5 flex flex-col">
						<ContactForm />
					</div>
				</div>
			</div>
		</>
	);
}
