export const siteConfig = {
	title: {
		default: "almostJohn",
		template: "%s | almostJohn",
	},
	social: {
		email: "mailto:garcia.johngale@gmail.com",
		github: "https://github.com/almostJohn",
		discord: "https://discord.com/users/996354867708841984",
		twitter: "https://x.com/almostJohn1",
		instagram: "https://instagram.com/almostjohn1",
		facebook: "https://facebook.com/alsojohn01",
	},
	projects: [
		{
			title: "djs-framework",
			description: "A framework for building Discord bot the fastest way.",
			href: "https://djs-fwk.vercel.app",
		},
		{
			title: "tsconfig",
			description: "A typescript configuration that you can copy and paste into your projects.",
			href: "https://tscfg.vercel.app",
		},
	],
};

export type Website = typeof siteConfig;
