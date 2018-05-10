const path = require('path')
export default {
    publicPath:"",
    disableDynamicImport:true,
    ignoreMomentLocale:true,
    alias:{
        utils:path.resolve(__dirname,'src/utils/'),
        assets:path.resolve(__dirname,'src/assets/'),
        components: path.resolve(__dirname, 'src/components/'),
        common: path.resolve(__dirname, 'src/common/'),
        services: path.resolve(__dirname, 'src/services/'),
    },
    proxy: {
        "/api/v1/th": {
          "target": "http://xxx.com",
          "changeOrigin": true,
          "pathRewrite": { "^/api/v1/th": "" }
        },
      },

      extraBabelPlugins: [
        ['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: true }],
      ],
}
