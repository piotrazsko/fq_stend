'use strict';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const postcssPresetEnv = require('postcss-preset-env');

const sassModuleRegex = /\.(scss|sass)$/;
const sassRegex = /\.common\.(scss|sass)$/;
const shouldUseRelativeAssetPaths = true;
const shouldUseSourceMap = false;

const cssFilename = 'static/css/[name].[contenthash:8].css';
const extractTextPluginOptions = {
    filename: cssFilename,
};
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
                        loader: require.resolve('file-loader'),
                        options: {
                            limit: 10000,
                            // name: 'static/media/[name].[hash:8].[ext]',
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
                        // For pure CSS - /\.css$/i,
                        // For Sass/SCSS - /\.((c|sa|sc)ss)$/i,
                        // For Less - /\.((c|le)ss)$/i,
                        test: /\.((c|sa|sc)ss)$/i,
                        use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    esModule: true,
                                },
                            },
                            {
                                loader: 'css-loader',
                                options: {
                                    // url: false,
                                    // Run `postcss-loader` on each CSS `@import`, do not forget that `sass-loader` compile non CSS `@import`'s into a single file
                                    // If you need run `sass-loader` and `postcss-loader` on each CSS `@import` please set it to `2`
                                    importLoaders: 2,
                                    // Automatically enable css modules for files satisfying `/\.module\.\w+$/i` RegExp.
                                    modules: { auto: true },
                                },
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    // Necessary for external CSS imports to work
                                    // https://github.com/facebookincubator/create-react-app/issues/2677
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
                            // Can be `less-loader`
                            'resolve-url-loader',
                            {
                                loader: 'sass-loader',
                                options: {
                                    // javascriptEnabled: true,
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
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        // new ManifestPlugin({
        //     fileName: 'asset-manifest.json',
        // }),

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
