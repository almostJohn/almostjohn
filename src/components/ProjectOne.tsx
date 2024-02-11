import Link from "next/link";
import { Card, CardBody, CardDescription, CardTitle } from "./ui/card-ui";

export function ProjectOne() {
	return (
		<Card className="lg:card-side mt-6">
			<CardBody>
				<Link href="https://djs-framework.vercel.app">
					<CardTitle className="text-xl font-bold underline underline-offset-4">djs-framework</CardTitle>
					<CardDescription>The next generation tool to build Discord bots.</CardDescription>
				</Link>
			</CardBody>
		</Card>
	);
}
