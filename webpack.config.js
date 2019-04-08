let path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./assets/js/script.js',
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js',
        //publicPath:'./dist/'
    },
    module:{
        rules:[
            {
                use: ExtractTextPlugin.extract({
                  use: "css-loader"
                }),
                test: /\.css$/,
              },
              {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use:{
                    loader:'file-loader',
                    options: {
                        outputPath: 'css/fonts',
                        name: '[name].[ext]',
                    },
                }
            },
        {
            test:/\.(jpe?g|png|gif|svg)$/,
            use:[
                {
                loader:'url-loader',
                options:{
                    limit:400000,
                    outputPath:'./images',
                    publicPath: './images'
                }
                },
                'image-webpack-loader'
        
    ]
}


]
},
plugins: [
    new ExtractTextPlugin('./css/style.css'),
    new HtmlWebpackPlugin({
        template: 'assets/index.html'
    })
  ]
  }