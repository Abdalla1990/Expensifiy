const path = require('path');
const OutPutPath = path.join(__dirname, './public/');
module.exports = {
    entry: "./src/app.js", // read the code in app.js
    output: { // convert it into native react code in the public directory.
        path: OutPutPath,
        filename: 'bundle.js' // the name of the file the code gets converted in.
    },
    module: { // any third party library 
        rules: [{
            loader: 'babel-loader', // babel which converts the code from jsx to react 
            test: /\.js$/, // any file that ends with .js
            exclude: /node_modules/ // don't read these files 
        },{
            test:/\.s?css$/, // load the scss styles the S is optional , so its either scss or css 
            use:['style-loader',// use these 2 loaders when runing the code. 
            'css-loader',// use these 2 loaders when runing the code. 
            'sass-loader'] // use this to convert the sass to css YOU HAVE TO INSTALL SASS_LOADER AND NODE_SASS before adding this. 
        }]
    },
    devtool :'cheap-module-eval-source-map',
     devServer:{
        contentBase:OutPutPath,
        historyApiFallback : true // when designing a router , any /(somethiing) will go to the server and look for the hendler of that route 
                                    // if it doesnt find anything (which it apparently won't) it will throw 404 error and this handels it and
                                    // will tell the server to fallback to index.html which react takes car of and react will find the right route for that. 
    }
};