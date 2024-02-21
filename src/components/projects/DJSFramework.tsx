import Link from "next/link";

export function DJSFramework() {
	return (
		<div className="p-4 rounded border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
			<Link href="https://djs-framework.vercel.app" className="flex flex-col space-y-1.5 !no-underline">
				<div>
					<span className="font-medium underline underline-offset-4">djs-framework</span>
				</div>
				<span className="text-neutral-600 dark:text-neutral-400">The next generation tool to build Discord bots.</span>
			</Link>
		</div>
	);
}
