const path = require('path');
console.log(require('react-scripts/config/webpack.config.js'));
const webpack = require('webpack');
module.exports = {
    components: ['./src/components/*/index.js', './src/components/redesign/*/index.js'],
    styleguideDir: 'dist',
    template: {
        head: {
            links: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Montserrat',
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
            base: 'Montserrat, sans-serif',
        },
    },
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/components/HOK'),
    },
    webpackConfig: (...data) => {
        const settings = require('react-scripts/config/webpack.config')(...data);
        settings.resolve.modules = [
            ...settings.resolve.modules,
            path.resolve(__dirname, 'src'),
            path.resolve(__dirname, ''),
        ];

        settings.module.rules.push({
            test: /.\.md$/,
            type: 'javascript/auto',
        });
        settings.plugins.push(
            new webpack.NormalModuleReplacementPlugin(
                /react-styleguidist\/lib\/loaders\/utils\/client\/requireInRuntime$/,
                'react-styleguidist/lib/loaders/utils/client/requireInRuntime'
            )
        );
        settings.plugins.push(
            new webpack.NormalModuleReplacementPlugin(
                /react-styleguidist\/lib\/loaders\/utils\/client\/evalInContext$/,
                'react-styleguidist/lib/loaders/utils/client/evalInContext'
            )
        );

        return Object.assign(
            {},
            {
                ...settings,
            }
        );
    },

    // webpackConfig: require('react-scripts/config/webpack.config.js'),
};
