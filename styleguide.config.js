module.exports = {
    components: 'src/components/*/index.js',
    styleguideDir: 'dist',
    template: {
        head: {
            links: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Roboto',
                },
                {
                    rel: 'stylesheet',
                    href: 'http://localhost:6060/src/static/fonts/stylesheet.css',
                },
            ],
        },
    },
    theme: {
        fontFamily: {
            base: '"Roboto", sans-serif',
        },
    },
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.(png|svg)$/,
                    use: ['url-loader'],
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
    },
};
