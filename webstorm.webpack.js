const path = require('path')
module.exports={
    resolve: {
        alias: {
            utils: path.resolve(__dirname, 'src/utils/'),
            assets: path.resolve(__dirname, 'src/assets/'),
            components: path.resolve(__dirname, 'src/components/'),
            common: path.resolve(__dirname, 'src/common/'),
            services: path.resolve(__dirname, 'src/services/'),
        },
    }
}