import Link from "next/link";
import { Card, CardBody, CardDescription, CardTitle } from "./ui/card-ui";

export function ProjectThree() {
	return (
		<Card className="lg:card-side mt-6">
			<CardBody>
				<Link href="https://anony-bot.vercel.app">
					<CardTitle className="text-xl font-bold underline underline-offset-4">anony-bot</CardTitle>
					<CardDescription>The only confession Discord bot you&apos;ll ever need.</CardDescription>
				</Link>
			</CardBody>
		</Card>
	);
}
