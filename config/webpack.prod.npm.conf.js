const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');
const webpackBaseConfig = require('./webpack.base.npm.conf.js');
const merge = require('webpack-merge');
const pkg = require('../package.json');

module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    entry: {
        main: path.resolve(__dirname, '../src/components/index.js')
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "",
        filename: "NE-react-ui.js",
        library: 'NE-react-ui',
        libraryTarget: 'umd',
    },
    externals: {
        'react': {
            root: 'React',
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react'
        },
        'react-dom': {
            root: 'ReactDOM',
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom'
        },
        'classnames': 'classnames',
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true
                    },
                    sourceMap: false
                }
            })
        ]
    },
    plugins: [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
        new MiniCssExtractPlugin({ filename: 'NE-react-ui.css' }),
        new webpack.BannerPlugin(pkg.name + ' v' + pkg.version + ' by yg (c) ' + new Date().getFullYear() + ' Licensed ' + pkg.license),
        new webpack.LoaderOptionsPlugin({ minimize: true })
    ],

})