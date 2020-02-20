// compile, transpile, minify ...put everything into one file and give it to html if a web app.
const path = require('path');
//htmlWebPackPlugin: This generates the HTML dynamically, with an <script> tag including our dist/app.js file.
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {


    // give the entry JS file for our app.
    // entry: path.resolve('src/app.js'),
    entry: './src/app.js',
    // target: 'web',
    mode: 'development',
    // tell the path where the output file should be present and the name
    output: {
        filename: 'appbundle.js',
        // path: path.resolve('./dist/') or....,
        path: path.join(__dirname , '/dist')

    },

    //give the file extensions of source files for webpack to look at and compile
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    
    // how to compile things, takes the files with regex extensions and uses the loader provided to compile a/c
    module: {
        rules : [
            {
                test: /\.(js|jsx)$/,
                // if we dont want to minify all the js files inside node_modules
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }

            },
            {
               test: /\.css/,
               loader: 'css-loader' 
            }
        ]

    },

    plugins: [
        //We can also not specify the template, the plugun will create a default html.
        // But if we want to add any scripts this is a nice way to create our own html, add scripts 
        new HtmlWebpackPlugin({template: './src/index.html'})
    ]


}