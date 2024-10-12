export const siteConfig = {
	title: {
		default: "almostJohn",
		template: "%s | almostJohn",
	},
	socialLinks: {
		email: "mailto:garcia.johngale@gmail.com",
		github: "https://github.com/almostJohn",
		twitter: "https://twitter.com/almostJohn1",
		discord: "https://discord.com/users/996354867708841984",
		instagram: "https://instagram.com/almostjohn1",
		facebook: "https://facebook.com/alsojohn01",
	},
	projects: [
		{
			title: "secretfiles",
			description:
				"secretfiles is your anonymous archive. share your secrets, stories, and confessions without fear of exposure.",
			href: "https://github.com/almostJohn/secretfiles",
		},
		{
			title: "djs-framework",
			description: "a framework for building discord bot the fastest way.",
			href: "https://github.com/almostJohn/djs-framework",
		},
		{
			title: "tsconfig",
			description: "a typescript configuration that you can copy and paste into your projects.",
			href: "https://github.com/almostJohn/tsconfig",
		},
	],
} as const;

export type SiteConfig = typeof siteConfig;
