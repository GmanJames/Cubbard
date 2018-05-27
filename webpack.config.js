const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode   : 'development',
    entry  : ['./assets/js/main.js', './assets/sass/main.scss'],
    output : {
        filename: 'js/main.js',
        path: path.resolve(__dirname + '/static'),
        library: 'page'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.css',
        })
    ]
}
