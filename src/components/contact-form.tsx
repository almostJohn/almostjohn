"use client";

import * as React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Check, SendHorizonal, MailWarning } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { cn } from "~/lib/utils";

export function ContactForm() {
	const [state, handleSubmit] = useForm("mrgnqzbo");
	const [email, setEmail] = React.useState("");
	const [message, setMessage] = React.useState("");
	const [showError, setShowError] = React.useState(false);
	const [showSuccess, setShowSuccess] = React.useState(false);

	const handleClear = () => {
		setEmail("");
		setMessage("");
	};

	React.useEffect(() => {
		if (state.errors && state.errors.getFieldErrors.length > 0) {
			setShowError(true);
			const timeoutId = setTimeout(() => {
				setShowError(false);
			}, 5_000);

			return () => clearTimeout(timeoutId);
		}

		return undefined;
	}, [state.errors]);

	React.useEffect(() => {
		if (state.succeeded) {
			setShowSuccess(true);
			const timeoutId = setTimeout(() => {
				setShowSuccess(false);
			}, 5_000);

			return () => clearTimeout(timeoutId);
		}

		return undefined;
	}, [state.succeeded]);

	return (
		<div className="flex flex-col">
			<form onSubmit={handleSubmit}>
				<div className="flex items-center pb-6">
					{showError && (
						<Alert variant="destructive" className="bg-transparent">
							<MailWarning className="h-4 w-4" />
							<AlertTitle>Error</AlertTitle>
							<AlertDescription>There was an error sending your message. Please try again later.</AlertDescription>
						</Alert>
					)}
					{showSuccess && (
						<Alert variant="default" className="bg-transparent">
							<Check className="h-4 w-4" />
							<AlertTitle>Success</AlertTitle>
							<AlertDescription>Your message has been successfully submitted.</AlertDescription>
						</Alert>
					)}
				</div>
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
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
						value={message}
						onChange={(e) => setMessage(e.target.value)}
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
						variant="destructive"
						className={cn("px-6 py-2 font-medium text-sm")}
						type="button"
						onClick={handleClear}
					>
						Clear all
					</Button>
					<Button
						variant="secondary"
						className={cn("px-6 py-2 font-medium text-sm")}
						type="submit"
						disabled={state.submitting}
					>
						Send message <SendHorizonal className="ml-2 h-4 w-4" />
					</Button>
				</div>
			</form>
		</div>
	);
}
