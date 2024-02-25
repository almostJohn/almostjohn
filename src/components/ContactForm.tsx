"use client";

import { useForm, ValidationError } from "@formspree/react";
import { Check } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export function ContactForm() {
	const [state, handleSubmit] = useForm("mrgnqzbo");

	if (state.succeeded) {
		return (
			<Alert>
				<Check className="h-4 w-4" />
				<AlertTitle>Message Sent!</AlertTitle>
				<AlertDescription>Thank you for your cooperation.</AlertDescription>
			</Alert>
		);
	}

	return (
		<div className="p-2">
			<form onSubmit={handleSubmit}>
				<div>
					<div className="flex flex-col justify-center">
						<label className="text-xl font-bold leading-tight pb-3" htmlFor="email">
							Email Address
						</label>{" "}
						<Input id="email" type="email" name="email" placeholder="Your email" />
						<ValidationError prefix="Email" field="email" errors={state.errors} />
						<label className="text-xl font-bold leading-tight mt-3 pb-3">Message</label>
						<Textarea id="message" name="message" placeholder="Your message" />
						<ValidationError prefix="Message" field="message" errors={state.errors} />
					</div>
				</div>
				<div className="mt-5 flex">
					<Button type="submit" disabled={state.submitting} variant="default" className="w-full">
						Send Message
					</Button>
				</div>
			</form>
		</div>
	);
}
