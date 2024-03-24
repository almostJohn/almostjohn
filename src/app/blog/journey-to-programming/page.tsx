import * as React from "react";
import type { Metadata } from "next";
import { ChildBlogPageHeader } from "~/components/site-header";
import { SiteFooter } from "~/components/site-footer";

export const metadata: Metadata = {
	title: "My Journey to Programming",
};

export default function Page() {
	return (
		<>
			<ChildBlogPageHeader />
			<main className="prose prose-neutral dark:prose-invert tracking-wide">
				<h1 className="mt-8 text-2xl">From Developing Discord Bots to TypeScript: My Journey to Programming</h1>
				<div className="mt-4 " />
				<h2 className="text-xl">Brief History</h2>
				<p>
					Several years ago, my journey into the world of programming began with a simple desire; is to create a Discord
					bot. Little did I know that this decision would open the doors to a world of endless possibilities and
					opportunities for my learning. With JavaScript as my starting point, I embarked on a journey filled with
					challenges, triumphs, and ultimately, the discovery of a language that would become my go-to tool in the realm
					of software development; TypeScript.
				</p>
				<div className="mt-4" />
				<h2 className="text-xl">Discovering JavaScript</h2>
				<p>
					My foray programming language was driven by the need to develop a Discord bot. Armed with determination and
					curiosity, I delivered into the vast realm of programming languages and stumbled upon JavaScript. It&apos;s
					versatility and popularity made it an ideal choice for a beginner like me. With the help of online resources
					and documentation, I began to unravel the intricacies of JavaScript and it&apos;s application in building
					interactive and dynamic web applications.
				</p>
				<div className="mt-4" />
				<h2 className="text-xl">Transitioning to TypeScript</h2>
				<p>
					After a year of honing my skills with JavaScript, I encountered whispers of a language touted for it&apos;s
					enhanced features and benefits; TypeScript. Intrigued by the prospect of a more robust and type-safe
					alternative to JavaScript, I decided to explore a new territory. Transitioning from JavaScript to TypeScript
					was akin to upgrading from a bicycle to a sports car. The static typing, intelligent autocompletion, and
					comprehensive tooling offered by TypeScript really revolutionized my approach to programming.
				</p>
				<div className="mt-4" />
				<h2 className="text-xl">Embracing TypeScript</h2>
				<p>
					As I delved deeped into TypeScript, I realized it&apos;s potential to streamline my development process and
					enhance the quality of my code. Whether working on my personal projects, small applications or large-scale
					endeavors, TypeScript proved to be a reliable companion, empowering me to write cleaner, and more maintainable
					code with confidence. It&apos;s strict syntatical rules and compile-time checks served as invaluable
					safeguards against common pitfalls and errors, ultimately saving time and effort in the long run.
				</p>
				<div className="mt-4" />
				<h2 className="text-xl">My Journey Continues</h2>
				<p>
					As of today, TypeScript has become an indispensable part of my toolkit as software developer. It&apos;s
					versatility, scalabilty and community support make it the perfect choice for tackling a diverse range of
					projects. From crafting elegant web applications to developing robust backend systems, TypeScript continues to
					fuel my passion for innovation and creativity in the ever-evolving landscape of technology.
				</p>
				<div className="mt-4" />
				<h2 className="text-xl">Conclusion</h2>
				<p>
					My journey into programming began with developing a simple Discord bot and evolved into a profound exploration
					of programming languages, tools, and methodologies. Through perseverance and curiosity, I discovered the
					transformative power of TypeScript and embraced it as my primary programming language of my choice. As I look
					back on my journey, I am grateful for the experiences and lessons learned along the way, and I am excited to
					continue pushing the boundaries of what is possible with TypeScript by my side as my career goes on.
				</p>
				<div className="pt-2" />
				<p>Let me know if you enjoyed this post, and thank you for your time reading!</p>
			</main>
			<div className="mt-24" />
			<SiteFooter />
		</>
	);
}
