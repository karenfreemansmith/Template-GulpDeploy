# gulp-deploy
testing gulp tasks and deploy to gh-pages

## setting up wit gulp

*verify node.js and npm are installed (node -v, npm -v), or install if needed
*npm init (creates package.json file)
*npm install gulp --save --only=dev
*npm install browserify --save --only=dev
*npm install vinyl-source-stream --save --only=dev
**setup browserify gulptask
*npm install gulp-concat --save --only=dev
**setup concat gulptask, make it a dependency for browserify
*npm install gulp-uglify --save --only=dev
**setup mimimize gulptask, make it a dependency for concat
