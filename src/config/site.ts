export const siteConfig = {
	title: {
		default: "almostjohn",
		template: "%s - almostjohn",
	},
	name: "almostjohn",
	subName: "software developer",
	social: {
		github: "https://github.com/almostJohn",
		twitter: "https://x.com/almostJohn1",
	},
	projects: [
		{
			title: "djs-framework",
			href: "https://djs-fwk.vercel.app",
			description: "a framework for building discord bot the fastest way.",
		},
		{
			title: "tsconfig",
			href: "https://tscfg.vercel.app",
			description: "a typescript configuration that you can copy and paste into your projects.",
		},
		{
			title: "tasktrove",
			href: "https://tsktrve.vercel.app",
			description: "streamlined task management for busy professionals.",
			info: "Development",
		},
	],
};

export type SiteConfig = typeof siteConfig;
