import * as React from "react";
import { Send } from "lucide-react";
import { ContactForm } from "~/components/contact-form";
import { Metadata } from "next";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { siteConfig } from "~/config/site";

export const metadata = {
	title: "Contact",
} satisfies Metadata;

export default function Page() {
	return (
		<>
			<div className="flex container flex-col space-y-6 py-16">
				<h1 className="font-medium text-2xl mb-8 tracking-tighter">let&apos;s get in touch</h1>
				<div className="border-b border-border/40">
					<p className="text-muted-foreground prose prose-neutral dark:prose-invert leading-normal">
						Do you want to discuss a project, an idea, or an opportunity? Just fill out this form or write me an{" "}
						<Link
							href={siteConfig.social.email}
							rel="noreferrer"
							target="_blank"
							className={cn(
								"border bg-transparent p-1 text-sm inline-flex items-center leading-4 no-underline rounded text-black dark:text-white",
							)}
						>
							<Send width={14} height={14} className="!mr-1" /> Email
						</Link>
						.
					</p>
				</div>
				<div className="p-5 flex flex-col">
					<ContactForm />
				</div>
			</div>
		</>
	);
}
