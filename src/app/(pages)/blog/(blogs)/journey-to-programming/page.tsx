import * as React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "My Journey To Programming",
};

export default function BlogPage() {
	return (
		<main className="flex-1 pb-16">
			<div className="container flex flex-col space-y-4">
				<div className="pt-6 flex flex-col space-y-4">
					<div className="flex flex-col space-y-2">
						<h4 className="text-xl font-medium leading-tight tracking-tighter md:text-2xl">
							My Journey To Programming
						</h4>
						<div className="flex items-center justify-between">
							<p className="text-xs text-neutral-500">March 24, 2024</p>
							<p className="text-xs text-neutral-500">(2 min read)</p>
						</div>
					</div>
					<p>
						Several years ago, my journey into the world of programming began with a simple desire; to create a Discord
						bot. Little did I know that this decision would open the doors to a world of endless possibilities and
						opportunities for learning. With JavaScript as my starting point, I embarked on a journey filled with
						challenges, triumphs, and ultimately, the discovery of a programming language that would become my go-to
						tool in the realm of software development; TypeScript.
						<br />
						<br />
						This post will be a collection of my experience based on how I discover my first programming language and
						how I embrace it as my journey continues.
					</p>
					<div className="pt-5 flex flex-col space-y-4">
						<h5 className="text-lg font-medium tracking-tighter">How I discovered JavaScript (JS)?</h5>
						<p>
							My journey into programming was driven by the need to develop a Discord bot. Armed with determination and
							curiosity, I delved into the vast realm of programming languages and stumbled upon JavaScript. Its
							versatility and popularity made it an ideal choice for a beginner like me. With the help of online
							resources and documentation, I began to unravel the intricacies of JavaScript and its application in
							building interactive and dynamic web applications.
						</p>
					</div>
					<div className="pt-5 flex flex-col space-y-4">
						<h5 className="text-lg font-medium tracking-tighter">Introduction to TypeScript (TS)</h5>
						<p>
							After a year of honing my skills and learning from other senior programmers using JavaScript, I
							encountered whispers of a language touted for its enhanced features and benefits; TypeScript. Intrigued by
							the prospect of a more robust and type-safe alternative to JavaScript, I decided to explore this new
							territory. Transitioning from JavaScript to TypeScript was akin to upgrading from a bicycle to a sports
							car. The static typing, intelligent autocompletion, and comprehensive tooling offered by TypeScript
							revolutionized my approach to programming.
						</p>
					</div>
					<div className="pt-5 flex flex-col space-y-4">
						<h5 className="text-lg font-medium tracking-tighter">Embracing TypeScript (TS)</h5>
						<p>
							As I delved deeper into TypeScript, I realized its potential to streamline my development process and
							enhance the quality of my code. Whether working on personal projects, small applications, or large-scale
							endeavors, TypeScript proved to be a reliable companion, empowering me to write cleaner, more maintainable
							code with confidence. Its strict syntactical rules and compile-time checks served as invaluable safeguards
							against common pitfalls and errors, ultimately saving time and effort in the long run.
						</p>
					</div>
					<div className="pt-5 flex flex-col space-y-4">
						<h5 className="text-lg font-medium tracking-tighter">Continuing with TypeScript (TS)</h5>
						<p>
							Today, TypeScript has become an indispensable part of my toolkit as a software developer. Its versatility,
							scalability, and community support make it the perfect choice for tackling a diverse range of projects.
							From crafting elegant web applications to developing robust backend systems, TypeScript continues to fuel
							my passion for innovation and creativity in the ever-evolving landscape of technology.
						</p>
					</div>
					<div className="pt-5 flex flex-col space-y-4">
						<h5 className="text-lg font-medium tracking-tighter">Conclusion</h5>
						<p>
							My journey into programming began with a simple Discord bot and evolved into a profound exploration of
							languages, tools, and methodologies. Through perseverance and curiosity, I discovered the transformative
							power of TypeScript and embraced it as my primary programming language of choice. As I look back on my
							journey, I am grateful for the experiences and lessons learned along the way, and I am excited to continue
							pushing the boundaries of what is possible with TypeScript by my side.
							<br />
							<br />
							Let me know if you enjoyed this post, and thank you for reading!
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
