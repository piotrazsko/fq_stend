'use strict';

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

const sassModuleRegex = /\.(scss|sass)$/;
const sassRegex = /\.common\.(scss|sass)$/;
const shouldUseRelativeAssetPaths = true;
const shouldUseSourceMap = false;

const cssFilename = 'static/css/[name].[contenthash:8].css';
const extractTextPluginOptions = shouldUseRelativeAssetPaths
    ? // Making sure that the publicPath goes back to to build folder.
      { publicPath: Array(cssFilename.split('/').length).join('../') }
    : {};
const pkg = require('./package.json');
const libraryName = pkg.name;
module.exports = {
    // Don't attempt to continue if there are any errors.
    bail: true,
    // We generate sourcemaps in production. This is slow but gives good results.
    // You can exclude the *.map files from the build during deployment.
    devtool: shouldUseSourceMap ? 'source-map' : false,
    // In production, we only want to load the polyfills and the app code.
    entry: path.join(__dirname, './src/components/index.js'),
    output: {
        path: path.join(__dirname, './es/'),
        filename: 'bundle.js',
        library: libraryName,
        libraryTarget: 'umd',
        publicPath: '/es/',
        umdNamedDefine: true,
        globalObject: 'this',
    },
    resolve: {
        alias: {
            react: path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        },
    },
    externals: {
        // Don't bundle react or react-dom
        react: 'react',
        'react-dom': 'react-dom',
    },
    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.(js|jsx)$/,
                enforce: 'pre',
                use: [
                    {
                        options: {
                            formatter: eslintFormatter,
                            eslintPath: require.resolve('eslint'),
                        },
                        loader: require.resolve('eslint-loader'),
                    },
                ],
                // include: paths.appSrc,
            },
            {
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                    {
                        test: /\.(js|jsx)$/,
                        loader: require.resolve('babel-loader'),
                        options: {
                            compact: true,
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
                        test: /\.css$/,
                        loader: ExtractTextPlugin.extract(
                            Object.assign(
                                {
                                    use: [
                                        {
                                            loader: require.resolve('css-loader'),
                                            options: {
                                                importLoaders: 1,
                                                minimize: true,
                                                sourceMap: shouldUseSourceMap,
                                            },
                                        },
                                        {
                                            loader: require.resolve('postcss-loader'),
                                            options: {
                                                ident: 'postcss',
                                                plugins: () => [
                                                    require('postcss-flexbugs-fixes'),
                                                    autoprefixer({
                                                        browsers: [
                                                            '>1%',
                                                            'last 4 versions',
                                                            'Firefox ESR',
                                                            'not ie < 9', // React doesn't support IE8 anyway
                                                        ],
                                                        flexbox: 'no-2009',
                                                    }),
                                                ],
                                            },
                                        },
                                    ],
                                },
                                extractTextPluginOptions
                            )
                        ),
                        // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
                    },
                    {
                        test: sassModuleRegex,
                        exclude: [/node_modules/, sassRegex],
                        use: [
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 1,
                                    modules: true,
                                    // camelCase: true,
                                    // localIdentName: '[folder]__[local]--[hash:base64:5]',
                                },
                            },
                            {
                                loader: require.resolve('postcss-loader'),
                                options: {
                                    ident: 'postcss',
                                    plugins: () => [
                                        require('postcss-flexbugs-fixes'),
                                        autoprefixer({
                                            browsers: [
                                                '>1%',
                                                'last 4 versions',
                                                'Firefox ESR',
                                                'not ie < 9', // React doesn't support IE8 anyway
                                            ],
                                            flexbox: 'no-2009',
                                        }),
                                    ],
                                },
                            },
                            require.resolve('resolve-url-loader'),
                            {
                                loader: require.resolve('sass-loader'),
                                options: {
                                    // paths: [path.resolve(__dirname, 'src/styles')],
                                    // javascriptEnabled: true,
                                },
                            },
                        ],
                    },
                    {
                        test: sassRegex,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: require.resolve('css-loader'),
                                options: {
                                    importLoaders: 1,
                                    camelCase: true,
                                    localIdentName: '[folder]__[local]--[hash:base64:5]',
                                },
                            },
                            {
                                loader: require.resolve('postcss-loader'),
                                options: {
                                    ident: 'postcss',
                                    plugins: () => [
                                        require('postcss-flexbugs-fixes'),
                                        autoprefixer({
                                            browsers: [
                                                '>1%',
                                                'last 4 versions',
                                                'Firefox ESR',
                                                'not ie < 9', // React doesn't support IE8 anyway
                                            ],
                                            flexbox: 'no-2009',
                                        }),
                                    ],
                                },
                            },
                            {
                                loader: require.resolve('sass-loader'),
                                options: {
                                    // paths: [path.resolve(__dirname, 'src/styles')],
                                    javascriptEnabled: true,
                                },
                            },
                        ],
                    },
                    {
                        loader: require.resolve('file-loader'),
                        exclude: [/\.js$/, /\.html$/, /\.json$/],
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            PRODUCTION: JSON.stringify(true),
            VERSION: JSON.stringify('5fa3b9'),
            BROWSER_SUPPORTS_HTML5: true,
            TWO: '1+1',
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
        // Minify the code.
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: false,
            extractComments: true,
        }),
        new ExtractTextPlugin({
            filename: cssFilename,
        }),
        new ManifestPlugin({
            fileName: 'asset-manifest.json',
        }),

        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
};
