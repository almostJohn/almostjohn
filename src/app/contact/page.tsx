import * as React from "react";
import { Send } from "lucide-react";
import { ContactForm } from "~/components/contact-form";
import { Metadata } from "next";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { siteConfig } from "~/config/site";
import { SiteFooter } from "~/components/site-footer";

export const metadata = {
	title: "Contact",
} satisfies Metadata;

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
					<div className="mt-12" />
					<ContactForm />
					<div className="mt-24" />
					<SiteFooter />
				</div>
			</main>
		</>
	);
}

function ContactPageHeader() {
	return (
		<header className="h-[37.5px] flex items-center justify-between -mt-2">
			<div className="text-muted-foreground flex gap-x-4">
				<Link
					href="/"
					target="_self"
					className={cn(
						"underline decoration-neutral-600 underline-offset-4 transition-colors focus:decoration-neutral-500 focus:outline-offset-4 hover:decoration-neutral-500",
					)}
				>
					← back
				</Link>
			</div>
		</header>
	);
}
