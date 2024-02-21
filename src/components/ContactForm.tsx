"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Check } from "lucide-react";

export function ContactForm() {
	const [state, handleSubmit] = useForm("mrgnqzbo");

	if (state.succeeded) {
		return (
			<div
				role="alert"
				className="p-4 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 dark:text-neutral-100 text-neutral-800 flex flex-row rounded"
			>
				<Check />
				<span className="ml-1">Message Sent.</span>
			</div>
		);
	}

	return (
		<div className="p-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 mt-6 flex flex-col justify-center rounded">
			<div className="p-5 rounded">
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
								className="p-3 m-auto border border-neutral-200 hover:border-neutral-700 dark:border-neutral-700 dark:hover:border-neutral-200 bg-neutral-50 dark:bg-neutral-800 transition-all rounded mt-4 w-full"
							/>
							<ValidationError prefix="Email" field="email" errors={state.errors} />
							<h1 className="text-xl font-bold leading-tight mt-3">Message</h1>
							<textarea
								className="p-3 border border-neutral-200 hover:border-neutral-700 dark:border-neutral-700 dark:hover:border-neutral-200 bg-neutral-50 dark:bg-neutral-800 transition-all rounded mt-4 w-full"
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
							className="p-2 border-0 text-center bg-neutral-300 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 transition-colors rounded w-full dark:text-neutral-100 text-neutral-800"
						>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
