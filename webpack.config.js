const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin= require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
 
  entry:  {
    app:'./src/index.js'
  },
  
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.js"
  },

  mode: "development",

  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    port: 1233,
    overlay: true,//for errors
    
    writeToDisk: true,
  
  },

  module: {
    rules: [

      {
        test: require.resolve('jquery'),
        use: [
          {
            loader: 'expose-loader',
            options: 'jQuery'
          },
          {
            loader: 'expose-loader',
            options: '$'
          }
        ]
      },

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
           
            MiniCssExtractPlugin.loader,
           'css-loader',
           'sass-loader'
        ]
      },
      
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: "file-loader", 
            options: {
              name: '[name].[ext]',
              outputPath: "/images",
              // esModule: false,
            }
          }
        ]
      },

      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: [
          {
            loader: "file-loader", 
            options: {
              name: '[name].[ext]',
              outputPath: "/fonts",
              esModule: false,
            }
          }
        ]
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            }
          }
        ]
      }
    ]
  },
 
  plugins: [
    new HtmlWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
      // chunks:['app']
    }),

    new HtmlWebpackPlugin({
      filename: "search.html",
      template: "./src/search.html",
      // chunks:['app']
    }),

    new HtmlWebpackPlugin({
      filename: "checkout.html",
      template: "./src/checkout.html",
      // chunks:['app']
    }),

    new HtmlWebpackPlugin({
      filename: "product.html",
      template: "./src/product.html",
      // chunks:['app']
    }),

    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./src/contact.html",
      // chunks:['app']
    }),

    new HtmlWebpackPlugin({
      filename: "payment.html",
      template: "./src/payment.html",
      // chunks:['app']
    }),

    new MiniCssExtractPlugin({filename: "css/style.css"}),

    new OptimizeCSSAssetsPlugin({}),

  ],

};
