import * as React from "react";
import { SiteHeader } from "~/components/site-header";

export default function IndexLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<>
			<SiteHeader />
			{children}
		</>
	);
}
