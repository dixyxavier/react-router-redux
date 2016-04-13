///*eslint-disable no-console, no-var */
//var express = require('express')
//var rewrite = require('express-urlrewrite')
//var webpack = require('webpack')
//var webpackDevMiddleware = require('webpack-dev-middleware')
//var WebpackConfig = require('./webpack.config')
//
//var app = express()
//
//app.use(webpackDevMiddleware(webpack(WebpackConfig), {
//    publicPath: '/__build__/',
//    stats: {
//        colors: true
//    }
//}))
//
//var fs = require('fs')
//var path = require('path')
//
////fs.readdirSync(__dirname).forEach(function (file) {
////    if (fs.statSync(path.join(__dirname, file)).isDirectory())
////        app.use(rewrite('/' + file + '/*', '/' + file + '/index.html'))
////})
//
//app.use(express.static(__dirname));
//
//app.listen(9001, function () {
//    console.log('Server listening on http://localhost:9001, Ctrl+C to stop')
//})

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(9001, 'localhost', function (err, result) {
    if (err) console.log(err);
    console.log('Listening at localhost:9001');
});