import * as React from "react";
import type { Metadata } from "next";
import { Title } from "~/components/blogs/nodejs-map-explained-with-cookies/title";
import { Intro } from "~/components/blogs/nodejs-map-explained-with-cookies/intro";
import { FirstSection } from "~/components/blogs/nodejs-map-explained-with-cookies/first-section";
import { SecondSection } from "~/components/blogs/nodejs-map-explained-with-cookies/second-section";
import { ShapeCookie } from "~/components/blogs/nodejs-map-explained-with-cookies/shape-cookie";
import { LastSection } from "~/components/blogs/nodejs-map-explained-with-cookies/last-section";

export const metadata: Metadata = {
	title: "Node.js Map Explained With Cookies",
};

export default function BlogPage() {
	return (
		<main className="flex-1 pb-16">
			<div className="container flex flex-col">
				<div className="pt-6 flex flex-col space-y-8">
					<Title />
					<Intro />
					<FirstSection />
					<ShapeCookie />
					<SecondSection />
					<LastSection />
				</div>
			</div>
		</main>
	);
}
