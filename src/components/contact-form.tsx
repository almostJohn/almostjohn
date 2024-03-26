"use client";

import * as React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Check } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { cn } from "~/lib/utils";

export function ContactForm() {
	const [state, handleSubmit] = useForm("mrgnqzbo");

	if (state.succeeded) {
		return (
			<Alert variant="default" className="bg-transparent">
				<Check className="h-4 w-4" />
				<AlertTitle>Message Sent!</AlertTitle>
				<AlertDescription>Your message has been successfully delivered.</AlertDescription>
			</Alert>
		);
	}

	return (
		<div className="flex flex-col">
			<form onSubmit={handleSubmit}>
				<div className="flex flex-col space-y-1.5">
					<Label className="pb-3" htmlFor="email">
						Email Address
					</Label>
					<Input
						id="email"
						name="email"
						type="email"
						placeholder="Your email"
						className="border-0 bg-neutral-200 dark:bg-neutral-800 px-6 py-2 font-medium rounded-md"
					/>
					<ValidationError className="text-red-500 font-medium" prefix="Email" field="email" errors={state.errors} />
				</div>
				<div className="pt-4 flex flex-col space-y-1.5">
					<Label className="pb-3" htmlFor="message">
						Message
					</Label>
					<Textarea
						id="message"
						name="message"
						placeholder="Your message"
						className="border-0 bg-neutral-200 dark:bg-neutral-800 px-6 py-2 font-medium rounded-md"
					/>
					<ValidationError
						className="text-red-500 font-medium"
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
				</div>
				<div className="pt-6 flex flex-col gap-3 md:flex-row">
					<Button
						variant="default"
						className={cn("px-6 py-2 font-medium text-sm")}
						type="submit"
						disabled={state.submitting}
					>
						Send message
					</Button>
				</div>
			</form>
		</div>
	);
}
