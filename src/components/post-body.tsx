import * as React from "react";
import markdownStyles from "~/styles/markdownStyles.module.css";

type Props = {
	content: string;
};

export function PostBody({ content }: Props) {
	return (
		<div>
			<div className={markdownStyles["markdown"]} dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	);
}
