const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html"
});

const copyWebpackPlugin = new CopyWebpackPlugin([
	{
		from: 'src/static',
		to: 'static'
	}
]);

const miniCssExtractPlugin = new MiniCssExtractPlugin({
	filename: `[name].css`
});

module.exports = {
	performance: {
		maxEntrypointSize: 1000000
	},
	entry: path.join(__dirname, "src/index.ts"),
	devServer: {
		port: 8085,
		host: "0.0.0.0"
	},
	//    devtool: 'source-map',
	output: {
		path: path.resolve(__dirname, ".") + '/dist/'
	},
	resolve: {
		modules: [path.resolve(__dirname, "src"), "node_modules"],
		extensions: [".tsx", ".ts", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.(html|md)$/,
				loader: 'raw-loader'
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.s?[ac]ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins: [htmlWebpackPlugin, copyWebpackPlugin, miniCssExtractPlugin]
};

