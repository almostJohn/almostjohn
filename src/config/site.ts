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
			title: "Home",
			href: "/",
		},
		{
			title: "Portfolio",
			href: "/portfolio",
		},
		{
			title: "Blog",
			href: "/blog",
		},
	],
	projects: {
		secretposts: "https://secretposts-link.vercel.app",
		djs_framework: "ttps://djs-fwk.vercel.app",
		tsconfig: "https://tscfg.vercel.app",
	},
} as const;

export type SiteConfig = typeof siteConfig;
