const mix = require('laravel-mix');

mix.options({
    runtimeChunkPath: 'assets',
    processCssUrls: false,
});

mix.js('assets/js/main.js', 'assets/js/app.js');
mix.sass('assets/css/style.scss', 'assets/css/style.css').sourceMaps();