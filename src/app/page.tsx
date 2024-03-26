import * as React from "react";
import { Projects } from "~/components/projects";
import { Blogs } from "~/components/blogs";
import { HomePageHeader } from "~/components/site-header";
import { SiteFooter } from "~/components/site-footer";
import { siteConfig } from "~/config/site";

export default function Page() {
	return (
		<>
			<HomePageHeader />
			<div className="pt-6" />
			<main className="leading-7 [&:not(:first-child)]:mt-6">
				<p>
					<small className="text-xs text-muted-foreground">&nbsp; {siteConfig.section.paragraphContent}</small>
					<br />
					Hi there, I&apos;m <strong>John</strong> aka <strong>almostJohn</strong>. I&apos;m a 23 y/o aspiring CS
					student. I write about things in <strong>tech</strong> and <strong>web development</strong> that make me{" "}
					<strong>optimistic</strong> for the future. I enjoy <strong>language design</strong>,{" "}
					<strong>web development</strong>, and I live in the <strong>terminal</strong>.
				</p>
				<div className="pt-4" />
				<div className="my-6">
					<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Projects</h3>
				</div>
				<Projects />
				<div className="pt-4" />
				<div className="my-6">
					<h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Blog</h3>
				</div>
				<Blogs />
			</main>
			<div className="mt-24" />
			<SiteFooter />
		</>
	);
}
