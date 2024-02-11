import Link from "next/link";
import { Card, CardBody, CardDescription, CardTitle } from "./ui/card-ui";

export function ProjectTwo() {
	return (
		<Card className="lg:card-side mt-6">
			<CardBody>
				<Link href="https://writenote.vercel.app">
					<CardTitle className="text-xl font-bold underline underline-offset-4">write-note</CardTitle>
					<CardDescription>Beautifully designed with next.js and shadcn/ui.</CardDescription>
				</Link>
			</CardBody>
		</Card>
	);
}
