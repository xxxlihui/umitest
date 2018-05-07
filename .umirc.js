export default {
    plugins: [
        ['umi-plugin-dva'],
        ['umi-plugin-routes', {
            exclude: [
                /exclude/,
                /models/,
                /services/,
                /model\.js/,
                /services\.js/,
                /components/
            ],
        }],
    ],
    pages: {
        '/': {Route: './src/components/Authorized/AuthorizedRoute.js', ignore: '/User'}
    },
    hashHistory: true
}
