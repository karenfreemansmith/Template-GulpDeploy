# gulp-deploy
testing gulp tasks and deploy to gh-pages

## setting up with gulp

* verify node.js and npm are installed (node -v, npm -v), or install if needed
* npm init (creates package.json file)
* npm install gulp --save --only=dev
* npm install browserify --save --only=dev
* npm install vinyl-source-stream --save --only=dev
  * setup browserify gulptask
* npm install gulp-concat --save --only=dev
  * setup concat gulptask, make it a dependency for browserify
* npm install gulp-uglify --save --only=dev
  * setup mimimize gulptask, make it a dependency for concat
* npm install gulp-util --save --only=dev
  * setup productionBuild variable
  * and "build" task that starts with min if production and browserify if not
* npm install del --save --only=dev
  * add "clean" task to delete files before build
  * insert "clean" as dependency for build
* npm install jshint --save --only=dev
* npm install gulp-jshint --save --only=dev
  * add jshint task to gulpfile
* npm install mocha --save --dev
* npm install chai --save --dev
  * create folder for specs/tests and setup test.js file(s)
  * add "mocha <foldername>" to tests in package.json

## Adding front-end dependencies with Bower
* (Bower is installed globally: npm install bower -g)
* bower init (*had to be run from powershell with admin privelleges*)
* bower install jquery --save
  * DON'T DO THIS!! *Just let Bootstrap get the jQuery because this installs jQuery 3.0.0 and Bootstrap isn't compatible with the new version.*
* bower install bootstrap --save
* bower install moment --save

## Back in NPM...
* npm install bower-files --save --only=dev
  * gulp tasks for "js" and "css" to combine files from vendors into one
  * add link/script for new vendor files
  * add bower task to build task
* npm install browser-sync --save --only=dev


* npm install gulp-gh-pages --save --only=dev
  * create gulp task to deploy dist folder to gh-pages
  * (missing index.html and other assets from dist folder...)
