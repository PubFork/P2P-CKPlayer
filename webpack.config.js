
var webpack = require('webpack')

var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
    entry:'./ckplayer/ckplayer.js',
    output:{
        filename:'./ckplayer/ckplayer.min.js'
    },
    plugins:[
        new UglifyJsPlugin
    ]
}
