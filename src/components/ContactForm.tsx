"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Check } from "lucide-react";
import { Card, CardBody } from "./ui/card-ui";
import { cn } from "~/util/cn";

export function ContactForm() {
	const [state, handleSubmit] = useForm("mrgnqzbo");

	if (state.succeeded) {
		return (
			<div role="alert" className="alert alert-success text-white flex flex-row">
				<Check />
				<span>Message Sent.</span>
			</div>
		);
	}

	return (
		<Card className="lg:card-side mt-6">
			<CardBody className="p-5 rounded bg-neutral-200 dark:bg-lightDark">
				<form onSubmit={handleSubmit}>
					<div>
						<div className="flex flex-col justify-center">
							<label className="text-xl font-bold leading-tight" htmlFor="email">
								Email Address
							</label>{" "}
							<input
								id="email"
								type="email"
								name="email"
								placeholder="Your email"
								className="input input-bordered rounded mt-4 w-full bg-white dark:bg-dark"
							/>
							<ValidationError prefix="Email" field="email" errors={state.errors} />
							<h1 className="text-xl font-bold leading-tight mt-3">Message</h1>
							<textarea
								className="textarea textarea-bordered rounded w-full mt-3 bg-white dark:bg-dark"
								placeholder="Your message"
								id="message"
								name="message"
							/>
							<ValidationError prefix="Message" field="message" errors={state.errors} />
						</div>
					</div>
					<div className="mt-4 flex">
						<button
							type="submit"
							disabled={state.submitting}
							className={cn(
								"btn rounded border-0 w-full bg-blurple hover:bg-lightBlurple text-white dark:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors",
							)}
						>
							Send Message
						</button>
					</div>
				</form>
			</CardBody>
		</Card>
	);
}
