var path = require("path");
module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname+'/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.(scss|css)$/,loader: "style-loader!css-loader!sass-loader"},

        ]
    }
};