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
	navLinks: [
		{
			title: "home",
			href: "/",
		},
		{
			title: "blog",
			href: "/blog",
		},
	],
	projects: [
		{
			title: "secretfiles",
			description:
				"secretfiles is your anonymous archive. share your secrets, stories, and confessions without fear of exposure.",
			href: "https://secretfiles-beta.vercel.app",
		},
		{
			title: "djs-framework",
			description: "a framework for building discord bot the fastest way.",
			href: "https://djs-fwk.vercel.app",
		},
		{
			title: "tsconfig",
			description: "a typescript configuration that you can copy and paste into your projects.",
			href: "https://tscfg.vercel.app",
		},
	],
} as const;

export type SiteConfig = typeof siteConfig;
