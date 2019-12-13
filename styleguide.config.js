module.exports = {
	components: 'src/components/**/index.js',
	styleguideDir: 'dist',
	template: {
		head: {
			links: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css?family=Roboto',
				},
			],
		},
	},
	theme: {
		fontFamily: {
			base: '"Roboto", sans-serif',
		},
	},
};
