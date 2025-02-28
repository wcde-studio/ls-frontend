/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.('.svg')
		);

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
				use: [{ loader: '@svgr/webpack', options: { icon: true } }],
			}
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
	env: {
		apiSeverURL: 'NEXT_PUBLIC_API_SERVER_HOST',
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ls-admin.widev.ru',
				port: '',
				pathname: '**',
			},
		],
		domains: [process.env.NEXT_PUBLIC_API_SERVER_HOST],
	},
};

export default nextConfig;
/*
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'ls-admin.widev.ru',
				port: '',
				pathname: '**',
			},
		],
	},s

	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '127.0.0.1',
				port: '1337',
				pathname: '**',
			},
		],

	*/
