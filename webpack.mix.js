/**
 * ===============================
 * PraveenLab - Laravel Mix Webpack Boilerplate
 * Standalone Laravel Mix and Webpack Boilerplate.
 * https://github.com/PraveenLab/laravel-mix-webpack-boilerplate
 * ===============================
 */

// Imports
const mix = require('laravel-mix');

// Basic Configurations
const SRC = 'src';  // Path to src folder
const DIST = 'dist';  // Path to dist folder
const PROXY = null; // Proxy to be used
const PORT = 3000; // Port to be used

// Misc Configurations
mix.setResourceRoot('../'); // Set resource root from its parent folder
mix.setPublicPath(DIST);  // Set public path

// Autoload libraries
mix.autoload({
    // jQuery
    'jquery': [
        '$', 'window.$', 'jQuery', 'window.jQuery'
    ],
    // Popper
    'popper.js/dist/umd/popper.js': [
        'Popper', 'window.Popper'
    ]
});

// Compile SCSS files
mix.sass( SRC + '/sass/app.scss', DIST + '/css/app.css').options({
  processCssUrls: false
});

// Compile Jacascript Files
mix.js(['src/js/app.js', 'src/js/script.js'], 'dist/js/app.js');

// Watch live in browser using BrowserSync
mix.browserSync({
   server: DIST,  // Load content from DIST folder
   proxy: PROXY, // Load pages in specified PROXY
   port: PORT,  // Load pages in specified PORT
   files: [
      '/*.{php|html}',
      DIST + '/**/*'
   ],
   notify: false  // Disable browser notifications
});
