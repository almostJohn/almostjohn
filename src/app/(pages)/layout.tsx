import * as React from "react";
import { SiteHeader } from "~/components/pages/site-header";

export default function PagesLayout({ children }: { readonly children: React.ReactNode }) {
	return (
		<>
			<SiteHeader />
			{children}
		</>
	);
}
