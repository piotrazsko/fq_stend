module.exports = {
	components: 'src/components/**/*.js',
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
