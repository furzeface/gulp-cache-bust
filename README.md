# gulp-cache-bust
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> cachebust plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage
First, install `gulp-cache-bust` as a development dependency:
```sh
npm install --save-dev gulp-cache-bust
```

Then, add it to your `gulpfile.js`:
```js
var cachebust = require('gulp-cache-bust');

gulp.src('./dist/*/*.html')
	.pipe(cachebust({
		type: 'timestamp'
	}))
	.pipe(gulp.dest('./dist'));
```

## API

### cache-bust(options)

#### options.type
Type: `String`  
Default: `MD5`	

The time of query string you want appended to your asset URLs.

#### options.basePath
Type: `String`
Default: ''

Path to find File in case you chose the MD5 Type of cache-busting.

#### options.resolveBasePathForEveryFile
Type: `Boolean`  
Default: `undefined`

If true, will override `options.basePath` and will set the `basePath` for every file based on each individual file's path. Useful when using relative paths. 

## License
Copyright (c) 2014 Daniel Furze. 

Licensed under the MIT license: [http://danielfurze.mit-license.org](http://danielfurze.mit-license.org)

[npm-url]: https://npmjs.org/package/gulp-cache-bust
[npm-image]: https://badge.fury.io/js/gulp-cache-bust.svg
[travis-url]: http://travis-ci.org/furzeface/gulp-cache-bust
[travis-image]: https://secure.travis-ci.org/furzeface/gulp-cache-bust.svg?branch=master
[coveralls-url]: https://coveralls.io/r/furzeface/gulp-cache-bust
[coveralls-image]: https://coveralls.io/repos/furzeface/gulp-cache-bust/badge.png
[depstat-url]: https://david-dm.org/furzeface/gulp-cache-bust
[depstat-image]: https://david-dm.org/furzeface/gulp-cache-bust.svg
