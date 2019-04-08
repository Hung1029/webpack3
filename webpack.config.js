let path = require('path');

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
}
}