import * as React from "react";
import { SHORT_NAME, SCREEN_NAME } from "~/util/constants";

export function Introduction() {
	return (
		<p className="leading-7 [&:not(:first-child)]:mt-6">
			Hi there, I&apos;m <strong>{SHORT_NAME}</strong> aka <strong>{SCREEN_NAME}</strong>. I&apos;m 23 y/o aspiring CS
			student. I like <strong>playing guitar</strong> and <strong>listening to music</strong>. I enjoy{" "}
			<strong>language design</strong> and <strong>web development</strong>.
		</p>
	);
}
