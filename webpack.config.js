module.exports = {
    entry: "./public/js/app.js",
    output: {
        path: "assets",
        filename: "bundle.min.js",
        publicPath: "assets"
    },
    module: {
        loaders: [
			       {
               test: /\.jsx?$/,
               exclude: /(node_modules|bower_components)/,
               loader: 'babel'
             },
             {
               test: /\.css$/,
               loader: 'style-loader!css-loader'
             },
             {
               test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
               loader: "file"
             },
             {
               test: /\.(woff|woff2)$/,
               loader:"url?prefix=font/&limit=5000"
             },
             {
               test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
               loader: "url?limit=10000&mimetype=application/octet-stream"
             },
             {
               test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
               loader: "url?limit=10000&mimetype=image/svg+xml"
             }
	       ]
    }
}
