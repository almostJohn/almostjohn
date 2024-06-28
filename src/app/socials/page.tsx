import * as React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { FULL_NAME, METADATA_SOCIALS_PAGE_TITLE } from "~/util/constants";
import { Socials } from "~/components/socials/socials";

export const metadata: Metadata = {
	title: METADATA_SOCIALS_PAGE_TITLE,
};

export default function Page() {
	return (
		<main className="flex-1 pb-16">
			<div className="container flex flex-col space-y-4">
				<div className="pt-8 flex flex-col space-y-6">
					<div className="flex flex-col space-y-2 items-center justify-center">
						<Image src="/me.jpg" alt="" width={500} height={500} className="h-16 w-16 rounded-full" />
						<h1 className="text-xl font-bold md:text-2xl">{FULL_NAME}</h1>
					</div>
					<Socials />
				</div>
			</div>
		</main>
	);
}
