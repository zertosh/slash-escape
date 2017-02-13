'use strict';

var ESCAPE_LOOKUP = {
  '\\': 'zB',
  ':': 'zC',
  '/': 'zS',
  '\x00': 'z0',
  'z': 'zZ',
};

var ESCAPE_REGEX = /[\\:\/\x00z]/g;

function escaper(match) {
  return ESCAPE_LOOKUP[match];
}

var UNESCAPE_LOOKUP = {
  'zB': '\\',
  'zC': ':',
  'zS': '/',
  'z0': '\x00',
  'zZ': 'z',
}

var UNESCAPE_REGEX = /z[BCS0Z]/g;

function unescaper(match) {
  return UNESCAPE_LOOKUP[match];
}

module.exports.escape = function escape(str) {
  return str.replace(ESCAPE_REGEX, escaper);
};

module.exports.unescape = function unescape(str) {
  return str.replace(UNESCAPE_REGEX, unescaper);
}
