const path = require('path');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        // 1: {
            // import: './entry_0.js',
            // dependOn: '2',
        // },
        1: './entry_0.js',
        2: './entry_1.js',
        3: './entry_2.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                default: {
                    minChunks: 2,
                    minSize: 0
                }
            }
        }
    }
};
