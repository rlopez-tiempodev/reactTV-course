const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const merge = require('webpack-merge');
const validate = require('webpack-validator');

// Custom webpack configurations
const parts = require('./lib/parts');

// https://webpack.github.io/docs/configuration.html#devtool
var sourceMaps = {
    development:{
        devtool: 'eval-source-map'
    },
    production:{
        devtool: 'source-map'
    }
};

const PATHS = {
    app: path.join(__dirname, 'app'),
    style:[
        path.join(__dirname, 'node_modules', 'purecss'),
        path.join(__dirname, 'app', 'main.css')
    ],

    build: path.join(__dirname, 'build')
};

const common = {
    module:{
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint-loader'],
                // define an include so we check just the files we need
                include: PATHS.app,
                exclude: '/node_modules'
            }
        ],
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['babel?cacheDirectory'],
                include: PATHS.app,
                exclude: '/node_modules'
            },
            {
                test: require.resolve('react'),
                loader: 'expose?React'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    // Entry accepts a path or an object of entries.
    // We'll be using the latter form given it's
    // convenient with more complex configurations.
    entry: {
        'whatwg-fetch': 'whatwg-fetch',
        style: PATHS.style,
        app: PATHS.app,
        vendor: ['react']
    },
    output: {
        // publicPath: '/reacttv/',
        path: PATHS.build,
        filename: '[name].[hash].js',
        chunkFilename: '[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React TV.',
            template: './app/index.ejs', // Load a custom template (ejs by default but can be changed)
            inject: 'body' // Inject all scripts into the body (this is the default so you can skip it)
        })
    ]
};


var config;

// Detect how npm is run and branch based on that
switch(process.env.npm_lifecycle_event) {
case 'build':
case 'stats':
    config = merge(
        common,
        sourceMaps.production,
        
        parts.setFreeVariable(
            'process.env.NODE_ENV',
            'production'
        ),

        parts.clean(PATHS.build),
        parts.minify(),
        
        parts.purifyCSS([PATHS.app]),
        parts.extractCSS(PATHS.style)
        
    );
    break;
default:
    config = merge(common,
                   sourceMaps.development,
                   parts.setupCSS(PATHS.style),
                   parts.devServer({
                       host: process.env.HOST,
                       port: process.env.PORT
                   })
                  );
}

// Run validator in quiet mode to avoid output in stats
module.exports = validate(config, {
    quiet: true
});
