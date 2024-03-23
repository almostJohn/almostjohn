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
			description: "The next generation tool to build Discord Bots.",
			href: "https://djs-framework-v0.vercel.app",
		},
		{
			title: "tsconfig",
			description: "TypeScript configuration that you can copy and paste into your projects.",
			href: "https://tsconfig-v0.vercel.app",
		},
		{
			title: "confessicat",
			description: "The only Confessions Discord Bot you'll ever need.",
			href: "https://confessicat-v0.vercel.app",
		},
		{
			title: "task-tracker",
			description: "Create a task, delete it later.",
			href: "https://tasktrack-v0.vercel.app",
		},
	],
};

export type Website = typeof siteConfig;
