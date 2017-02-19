# Dev Environment Build
Boilerplate for building a site from scratch using SCSS and ES6 (optional).

## Getting Started
1. Clone this repo to your project folder. In the terminal, navigate to that folder and run:
  ```
  $ npm install gulp -g
  $ npm install
  ```

  This will install Gulp globally as well as all dependencies for the dev environment. The install takes a few minutes, and you have to be connected to the internet. Do this only once per project.
  
  **Note:** You can also use Yarn to run this installation with `yarn install`. It will run in a fraction of the time. Check out [their page](https://code.facebook.com/posts/1840075619545360).

2. Once ready to code, in the terminal, run Gulp:
  `$ Gulp`

  Gulp will watch all folders for changes, compile your SCSS and JS files, and launch a local server; it will open a new tab on your web browser and point it to a localhost port, which will live reload every time a file changes. The only other plugin installed is [autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer), which automatically adds vendor prefixes to any CSS properties that need them; you don't have to worry about adding -moz, -webkit, -ms, -o to properties any more.

3. To stop Gulp, press `Ctrl + c` in the terminal. The server will stop running and localhost:3000 will no longer work, but you can still open the site directly in a browser.
