var config = {
   entry: __dirnmae+'/main.js',
   output: {
      path:__dirname+'/',
      filename: 'index.js',
   },
   module: {
      loaders: [
         {
            test: [/\.jsx?$/,/\.js?$/],
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         {
         	test: /\.(jpe?g|gif|png)$/,
         	loader: "file-loader?emitFile=false&name=./client/assets/images/[name].[ext]"
         }
      ]
   }
}
module.exports = config;
