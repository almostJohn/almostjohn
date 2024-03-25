import * as React from "react";
import { Send } from "lucide-react";
import { ContactForm } from "~/components/contact-form";
import { Metadata } from "next";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { ContactPageHeader } from "~/components/site-header";
import { SiteFooter } from "~/components/site-footer";

export const metadata: Metadata = {
	title: "Contact - almostJohn",
};

export default function Page() {
	return (
		<>
			<ContactPageHeader />
			<main className="prose prose-neutral dark:prose-invert">
				<div className="pt-1">
					<h2>Contact</h2>
					<p>
						Do you want to discuss a project, an idea, or an opportunity? Just fill out this form or write me an{" "}
						<Link
							href={siteConfig.social.email}
							rel="noreferrer"
							target="_blank"
							className={cn(
								"border bg-transparent p-1 text-sm inline-flex items-center leading-4 no-underline rounded-md",
							)}
						>
							<Send width={14} height={14} aria-hidden className="!mr-1" /> Email
						</Link>
						.
					</p>
					<div className="mt-8" />
					<ContactForm />
				</div>
			</main>
			<div className="mt-24" />
			<SiteFooter />
		</>
	);
}
