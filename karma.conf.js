var webpack = require('karma-webpack');
var webpackConfig = require('./webpack.config');

webpackConfig.module.loaders = [
  {
    test: /\.(js|jsx)$/, exclude: /(bower_components|node_modules)/,
    loader: 'babel-loader'
  }
];

webpackConfig.module.postLoaders = [{
  test: /\.(js|jsx)$/, exclude: /(node_modules|bower_components|tests)/,
  loader: 'istanbul-instrumenter'
}];

module.exports = function (config) {
  config.set({
    frameworks: [ 'mocha' , 'chai' ],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests/**/*.spec.js',
    ],
    plugins: [
      webpack, 
      'karma-mocha',
      'karma-chai',
      'karma-chrome-launcher',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-spec-reporter'
    ],
    browsers: [ 'PhantomJS' ],
    preprocessors: {
      'tests/**/*.spec.js': ['webpack'],
      'app/**/*.js': ['webpack']
    },
    reporters: [ 'spec', 'coverage' ],
    coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true }
  });
};


