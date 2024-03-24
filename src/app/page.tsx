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
			<div className="pt-8" />
			<main className="prose prose-neutral dark:prose-invert">
				<p>
					<small className="text-muted-foreground">&nbsp; {siteConfig.section.paragraphContent}</small>
					<br />
					Hi there, I&apos;m <strong>John</strong> aka <strong>almostJohn</strong>. I&apos;m a 23 y/o aspiring CS
					student. I write about things in <strong>tech</strong> and <strong>web development</strong> that make me{" "}
					<strong>optimistic</strong> for the future. I enjoy <strong>language design</strong>,{" "}
					<strong>web development</strong>, and I live in the <strong>terminal</strong>.
				</p>
				<div className="mt-12" />
				<h2>Projects</h2>
				<Projects />
				<div className="mt-12" />
				<h2>Blog</h2>
				<Blogs />
			</main>
			<div className="mt-24" />
			<SiteFooter />
		</>
	);
}
