let mix = require('laravel-mix')

require('laravel-mix-purgecss')

let scssOptions = {
    processCssUrls: false
}

mix.setPublicPath('./')
   .sass('assets/scss/base.scss', 'assets/css')
   .options(scssOptions)
    // Extract libraries requires ECMAScript 6 imports in your code.

   .purgeCss(
       {
           enabled: false,
           paths: () => [
               path.join(__dirname, './'),
           ],
           extensions: ['html', 'js', 'php'],
       }
   )
   .version()

// Production
if (mix.inProduction()) {
    mix.options({
        terser: {
            terserOptions: {
                warnings: true
            }
        }
    })
} else {
    mix.webpackConfig({
        devtool: 'source-map',
    })

    mix.sourceMaps()
}
