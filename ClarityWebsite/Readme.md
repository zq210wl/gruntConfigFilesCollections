## Build info
Version: 0.1.3 V6

## Before Install

Git and NodeJS need to be installed.
Ruby and SASS (Latest version) need to be installed for compiling SCSS files to CSS files

## Install

Use `npm install` & `bower install` to initialise the site

### FAQ
* When using bower to install libraries, there might be issue that cannot download some of them due to connection issue. Following command may help, by change git protocol to https
  * git config --global url."https://".insteadOf "git://"


## Grunt task sets

* Use `grunt` to trigger the default task, including `build` the site, `dist` the site, and start up a server for presenting the distributed site.
* Use `grunt dev` to trigger `build`, `dist`, start up a server for serving files under 'build' folder, and keep `watch` the source files. When changes on source files are made, it will automatically re-`build` the site.
* Use `grunt build` or `grunt dist` to build the site to 'build' folder or 'dist' folder. For when `build`, it will include `dist` task. `dist` includes some tasks to minify some css files and javascript file

## TODO

This frame is not mature. Some changes on Gruntfile.js are necessary for some special requirements or adding files / changing some structure.
