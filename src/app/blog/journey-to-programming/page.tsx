import * as React from "react";
import type { Metadata } from "next";
import { ChildBlogPageHeader } from "~/components/site-header";
import { SiteFooter } from "~/components/site-footer";
import { FirstBlogPost } from "../_components/firstBlogPost";

export const metadata: Metadata = {
	title: "My Journey to Programming",
};

export default function Page() {
	return (
		<>
			<ChildBlogPageHeader />
			<FirstBlogPost />
			<div className="mt-24" />
			<SiteFooter />
		</>
	);
}
