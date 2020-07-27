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
                    options: {
                        plugins: [
                            [
                                require.resolve('babel-plugin-named-asset-import'),
                                {
                                    loaderMap: {
                                        svg: {
                                            ReactComponent: '@svgr/webpack?-svgo,+ref![path]',
                                        },
                                    },
                                },
                            ],
                        ],
                    },
                },
                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'static/media/[name].[hash:8].[ext]',
                    },
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader',
                },
            ],
        },
    },
};
