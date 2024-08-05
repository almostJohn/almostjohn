import * as React from "react";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
	brand: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="lucide lucide-terminal"
				{...props}
			>
				<polyline points="4 17 10 11 4 5" />
				<line x1="12" x2="20" y1="19" y2="19" />
			</svg>
		);
	},
	menu: (props: IconProps) => {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="lucide lucide-align-right"
				{...props}
			>
				<line x1="21" x2="3" y1="6" y2="6" />
				<line x1="21" x2="9" y1="12" y2="12" />
				<line x1="21" x2="7" y1="18" y2="18" />
			</svg>
		);
	},
};
