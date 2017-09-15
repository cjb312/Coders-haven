var path = require("path");
var webpack = require("webpack");

module.exports = {
	entry: [
		"./src/index.js",
	],
	output: {
		path: path.join(__dirname, "public/js"),
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
		}, {
			test: /\.s?css$/,
			loaders: ["style-loader", "css-loader", "sass-loader"],
			include: path.join(__dirname, "src")
		}]
	},
	devtool: "#cheap-module-inline-source-map"
};
