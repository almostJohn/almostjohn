import * as React from "react";
import { SHORT_NAME, SCREEN_NAME } from "~/util/constants";

export function Introduction() {
	return (
		<p>
			<small className="text-neutral-500">IPA &nbsp; /`{SCREEN_NAME}/ — no meaning, i made it up.</small>
			<br />
			Hi there, I&apos;m <strong>{SHORT_NAME}</strong> aka <strong>{SCREEN_NAME}</strong>. I&apos;m 23 y/o aspiring CS
			student. I like <strong>playing guitar</strong> and <strong>building things</strong>. I enjoy{" "}
			<strong>language design</strong> and <strong>web development</strong>.
		</p>
	);
}
