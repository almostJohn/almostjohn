"use client";

export default function Error({ error }: { readonly error: Error }) {
	console.error(error);

	return (
		<main className="flex-1">
			<div className="container flex flex-col items-center justify-center pt-24 pb-24 space-y-4">
				<h1 className="text-2xl font-bold tracking-tighter">500</h1>
				<p className="text-muted-foreground">Page Error.</p>
			</div>
		</main>
	);
}
