import Link from "next/link";

export function WriteNote() {
	return (
		<div className="p-4 rounded border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
			<Link href="https://writenote.vercel.app" className="flex flex-col space-y-1.5 !no-underline">
				<div>
					<span className="font-medium underline underline-offset-4">writenote</span>
				</div>
				<span className="text-neutral-600 dark:text-neutral-400">Beautifully designed with next.js and shadcn/ui.</span>
			</Link>
		</div>
	);
}
