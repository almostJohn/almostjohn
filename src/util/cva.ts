import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md h-7 w-7 p-0 [&_svg]:h-4 [&_svg]:w-4",
	{
		variants: {
			variant: {
				primary:
					"text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground rounded-md flex h-7 w-7 items-center justify-center p-0",
			},
		},
		defaultVariants: {
			variant: "primary",
		},
	},
);
