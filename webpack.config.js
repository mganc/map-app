var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry: "./public/app.js",
    output: {
        path: "assets",
        filename: "bundle.min.js",
        publicPath: "assets"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel'],
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!autoprefixer-loader'

            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
       new OptimizeCssAssetsPlugin({
           assetNameRegExp: /\.optimize\.css$/g,
           cssProcessor: require('cssnano'),
           cssProcessorOptions: {discardComments: {removeAll: true}},
           canPrint: true
       })
   ]
}
