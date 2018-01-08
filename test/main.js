/*global describe, it*/
'use strict';

var fs = require('fs'),
	es = require('event-stream'),
	should = require('should');

require('mocha');

delete require.cache[require.resolve('../')];

var cachebust = require('../'),
	Vinyl = require('vinyl');

describe('gulp-cache-bust', function () {

	var expectedFile = new Vinyl({
		path: 'test/expected/default_options.html',
		cwd: 'test/',
		base: 'test/expected',
		contents: fs.readFileSync('test/expected/default_options.html')
	});

	it('should produce expected file via buffer', function (done) {

		var srcFile = new Vinyl({
			path: 'test/fixtures/default_options.html',
			cwd: 'test/',
			base: 'test/fixtures',
			contents: fs.readFileSync('test/fixtures/default_options.html')
		});
		var stream = cachebust();

		stream.on('error', function(err) {
			should.exist(err);
			done(err);
		});

		stream.on('data', function (newFile) {

			should.exist(newFile);
			should.exist(newFile.contents);

			String(newFile.contents).should.equal(String(expectedFile.contents));
			done();
		});

		stream.write(srcFile);
		stream.end();
	});

	it('should error on stream', function (done) {
		var srcFile = new Vinyl({
			path: 'test/fixtures/default_options.html',
			cwd: 'test/',
			base: 'test/fixtures',
			contents: fs.createReadStream('test/fixtures/default_options.html')
		});

		var stream = cachebust();

		stream.on('error', function(err) {
			should.exist(err);
			done();
		});

		stream.on('data', function (newFile) {
			newFile.contents.pipe(es.wait(function(err, data) {
				done(err);
			}));
		});

		stream.write(srcFile);
		stream.end();
	});
});
