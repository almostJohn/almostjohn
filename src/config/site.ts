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
			title: "secretposts.link",
			description: "Express yourself freely without revealing who you are.",
			href: "https://secretposts-link.vercel.app",
		},
		{
			title: "djs-framework",
			description: "A framework for building discord bot the fastest way.",
			href: "https://djs-fwk.vercel.app",
		},
		{
			title: "tsconfig",
			description: "A typescript configuration that you can copy and paste into your projects.",
			href: "https://tscfg.vercel.app",
		},
	],
} as const;

export type SiteConfig = typeof siteConfig;
