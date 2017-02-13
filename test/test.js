'use strict';

var test = require('tap').test;
var slashEscape = require('../slash-escape');

var escapes = {
  '/a/b/c/d': 'zSazSbzSczSd',
  '/z/zZ/a/': 'zSzZzSzZZzSazS',
  'z:\\a/b': 'zZzCzBazSb',
  '\x00abc': 'z0abc',
};

test('escape', function(t) {
  for (var key in escapes) {
    if (!escapes.hasOwnProperty(key)) continue;
    t.equal(
      slashEscape.escape(key),
      escapes[key]
    );
  }
  t.done();
});

test('unescape', function(t) {
  for (var key in escapes) {
    if (!escapes.hasOwnProperty(key)) continue;
    t.equal(
      slashEscape.unescape(escapes[key]),
      key
    );
  }
  t.done();
});

test('both ways', function(t) {
  for (var key in escapes) {
    if (!escapes.hasOwnProperty(key)) continue;
    t.equal(
      slashEscape.unescape(slashEscape.escape(key)),
      key
    );
  }
  t.done();
});
