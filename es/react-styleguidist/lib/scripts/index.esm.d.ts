import webpack from 'webpack';
import './utils/ensureWebpack';
import * as Rsg from '../typings';
/**
 * Initialize Styleguide API.
 *
 * @param {object} [config] Styleguidist config.
 * @returns {object} API.
 */
export default function (configArg?: Rsg.StyleguidistConfig | string): {
    /**
     * Build style guide.
     *
     * @param {Function} callback callback(err, config, stats).
     * @return {Compiler} Webpack Compiler instance.
     */
    build(callback: (err: Error, styleguidistConfig: Rsg.SanitizedStyleguidistConfig, stats: webpack.Stats) => void): webpack.Compiler;
    /**
     * Start style guide dev server.
     *
     * @param {Function} callback callback(err, config).
     * @return {ServerInfo.App} Webpack-Dev-Server.
     * @return {ServerInfo.Compiler} Webpack Compiler instance.
     */
    server(callback: (err: Error | undefined, styleguidistConfig: Rsg.SanitizedStyleguidistConfig) => void): {
        app: import("webpack-dev-server");
        compiler: webpack.Compiler; /**
         * Initialize Styleguide API.
         *
         * @param {object} [config] Styleguidist config.
         * @returns {object} API.
         */
    };
    /**
     * Return Styleguidist Webpack config.
     *
     * @param {string} [env=production] 'production' or 'development'.
     * @return {object}
     */
    makeWebpackConfig(env?: 'development' | 'production' | 'none'): webpack.Configuration;
};
