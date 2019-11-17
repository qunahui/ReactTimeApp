var webpack = require('webpack');


module.exports = {
    mode: 'development',
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!foundation-sites/dist/foundation.min.js',
        './app/app.jsx'
    ], // script! to avoid package regular scripts for webpack

    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias: {
            Main: 'app/components/Main.jsx',
            applicationStyles: 'app/style/app.scss',
            Navigation: 'app/components/Navigation.jsx'
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'eval-source-map'
};