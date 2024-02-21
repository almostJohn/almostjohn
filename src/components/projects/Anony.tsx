import Link from "next/link";

export function Anony() {
	return (
		<div className="p-4 rounded border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
			<Link href="https://anony-bot.vercel.app" className="flex flex-col space-y-1.5 !no-underline">
				<div>
					<span className="font-medium underline underline-offset-4">anony</span>
				</div>
				<span className="text-neutral-600 dark:text-neutral-400">
					The only confession Discord bot you&apos;ll ever need.
				</span>
			</Link>
		</div>
	);
}
