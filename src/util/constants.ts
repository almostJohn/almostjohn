export const FULL_NAME = "John Gale Garcia";
export const SHORT_NAME = "John";
export const SCREEN_NAME = "almostJohn";
export const TAG = "Software Developer";

export const EMAIL_URL = "mailto:garcia.johngale@gmail.com";
export const GITHUB_URL = "https://github.com/almostJohn";
export const DISCORD_URL = "https://discord.com/users/996354867708841984";
export const TWITTER_URL = "https://twitter.com/almostJohn1";
export const INSTAGRAM_URL = "https://instagram.com/almostjohn1";
export const FACEBOOK_URL = "https://facebook.com/alsojohn01";

export const METADATA_TITLE = {
	default: "almostJohn",
	template: "%s | almostJohn",
};

export const METADATA_BLOG_PAGE_TITLE = "Blog";
export const METADATA_SOCIALS_PAGE_TITLE = "Socials";

export const HEADER_LINKS = [
	{
		title: "home",
		href: "/",
	},
	{
		title: "blog",
		href: "/blog",
	},
	{
		title: "socials",
		href: "/socials",
	},
];

export const PROJECTS = [
	{
		title: "projects",
		options: [
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
			},
		],
	},
];

export const BLOGS = [
	{
		title: "read my blog",
		options: [
			{
				title: "Node.js Map Explained With Cookies",
				date: "June 29, 2024",
				href: "/blog/nodejs-map-explained-with-cookies",
			},
			{
				title: "My Journey To Programming",
				date: "March 24, 2024",
				href: "/blog/journey-to-programming",
			},
		],
	},
];

export const FEATURED_BLOGS = [
	{
		title: "blog",
		options: [
			{
				title: "Node.js Map Explained With Cookies",
				date: "June 29, 2024",
				href: "/blog/nodejs-map-explained-with-cookies",
			},
			{
				title: "My Journey To Programming",
				date: "March 24, 2024",
				href: "/blog/journey-to-programming",
			},
		],
	},
];

export const COOKIE_CODE_INSTANCE = `Cookie {
	quantity: 20,
	price: 3.50,
	shape: 'round',
	ingredients: [
		'chocolate',
		'butter',
		'vanilla',
		'sugar',
		'salt',
		'flour',
		'baking soda'
	],
}`;

export const COOKIE_BOX_EXAMPLE_CODE = `CookieBox {
  cookies: Collection [Map],
  flavorName: 'Chocolate Chip',
}`;

export const COOKIE_BOX_EXAMPLE_CODE_MAIN = `Collection [Map] {
  'Chocolate Chip' => Cookie,
  'Oatmeal Raisin' => Cookie,
  'Peanut Butter' => Cookie,
  'Sugar Cookie' => Cookie,
  'Vanilla Cookie' => Cookie
}`;

export const GET_METHOD_COOKIE_BOX = `const requestedBox = cookieBoxes.get('Chocolate Chip')
// returns the box mapped to flavor name 'Chocolate Chip'`;

export const HAS_METHOD_COOKIE_BOX = `const boolean = cookieBoxes.has('Chocolate Chip')
// returns true or false depending on if the specific box is in the collection or not`;

export const FOREACH_METHOD_COOKIE_BOX = `cookieBoxes.forEach((quantity, type) => {
  console.log('Quantity: ', quantity); // quantity of cookie
  console.log('Type: ', type); // type of cookie
});`;
