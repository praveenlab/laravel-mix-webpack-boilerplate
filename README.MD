# Laravel Mix Webpack Boilerplate

A boilerplate for building web projects with [Laravel Mix](https://laravel-mix.com/) and [Webpack](https://webpack.js.org/). Uses Laravel-mix 4.x and Webpack 4.x.

## Getting Started

Make sure these are installed first.

- [Node.js](http://nodejs.org)

### Quick Start

1. Clone the repository.
2. In bash/terminal/command line, `cd` into cloned directory.
3. Run `npm install` in terminal to install required files and dependencies.
4. Run `npm run watch` to start running boilerplate in http://localhost:3000/

## Folder structure

* `dist` - The compiled files are stored in this directory
    - `js` - All compiled `js` files are stored in this directory
    - `css` - All compiled `css` files are stored in this directory
    - `fonts` - All compiled/moved `font` files are stored in this directory
    -  `index.html` - Sample html file linked with dist directory assets
* `src` - Your development files are stored in this directory
    - `js` - Store all raw `js` files  in this directory
    - `scss` - Store all `scss`files in this directory
    - `fonts` - Store all `web-font` in this directory
    - `images` - Store all `image` files in this directory
    -  `index.html` - Sample html file
* `package.json` - All the dependencies and config for the project
* `webpack.mix.js` - It contains all Laravel-mix functions.

## License

The code is available under the [MIT License](LICENSE.md).
