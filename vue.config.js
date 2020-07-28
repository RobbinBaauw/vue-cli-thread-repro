module.exports = {
    parallel: true,
    chainWebpack: config => {
        const tsLoader = config.module.rule('ts')
        tsLoader
            .use('ts-loader')
            .loader('ts-loader')
            .tap(options => {
                return {
                    errorFormatter: (message, colors) => {
                        return "CUSTOM ERROR!";
                    }
                }
            })
    }
}
