# Dev Environment Build
Boilerplate for building a site from scratch using SCSS and ES6 (optional).

## Getting Started
1. Copy these files to your project folder. In the terminal, navigate to that folder and run:
  $ npm install gulp -g
  $ npm install

  This will install Gulp globally as well as all dependencies. The install takes a few minutes, and you have to be connected to the internet. Do this only once.

2. Once ready to code, in the terminal, run Gulp:
  $ Gulp

  Gulp will watch all folders for changes, compile your SCSS and JS files, and launch a local server; it will open a new tab on your web browser and point it to http://localhost:3000, which will live reload every time a file changes. The only other plugin installed is autoprefixer, which automatically adds vendor prefixes to any properties that need them; you don't have to worry about adding -moz, -webkit, -ms to properties any more.

3. To stop Gulp, press Ctrl + c in the terminal. The server will stop running and localhost:3000 will no longer work, but you can still open the site directly in a browser.
