/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.scdn.co",
				port: "",
				pathname: "/image/**",
			},
			{
				protocol: "https",
				hostname: "images.genius.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "i1.sndcdn.com",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
