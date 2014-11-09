# gulp-cachebust
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]  [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][depstat-image]][depstat-url]

> cachebust plugin for [gulp](https://github.com/wearefractal/gulp)

## Usage
First, install `gulp-cachebust` as a development dependency:
```sh
npm install --save-dev gulp-cachebust
```

Then, add it to your `gulpfile.js`:
```js
var cachebust = require('gulp-cachebust');

gulp.src('./dist/*/*.html')
	.pipe(cachebust({
		type: 'timestamp'
	}))
	.pipe(gulp.dest('./dist');
```

## API

### cachebust(options)

#### options.type
Type: `String`  
Default: `MD5`	

The time of query string you want appended to your asset URLs.

## License
Copyright (c) 2014 Daniel Furze. 

Licensed under the MIT license: [http://danielfurze.mit-license.org](http://danielfurze.mit-license.org)

[npm-url]: https://npmjs.org/package/gulp-cachebust
[npm-image]: https://badge.fury.io/js/gulp-cachebust.png
[travis-url]: http://travis-ci.org/furzeface/gulp-cachebust
[travis-image]: https://secure.travis-ci.org/furzeface/gulp-cachebust.png?branch=master
[coveralls-url]: https://coveralls.io/r/furzeface/gulp-cachebust
[coveralls-image]: https://coveralls.io/repos/furzeface/gulp-cachebust/badge.png
[depstat-url]: https://david-dm.org/furzeface/gulp-cachebust
[depstat-image]: https://david-dm.org/furzeface/gulp-cachebust.png
