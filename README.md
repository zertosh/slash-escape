# slash-escape

[![Build Status](https://travis-ci.org/zertosh/slash-escape.svg?branch=master)](https://travis-ci.org/zertosh/slash-escape)

Slash escape paths as valid filenames. Escapes `/foo/bar/baz` as `zSfoozSbarzSbazZ`, and `c:\\foo` as `czCzBfoo`.

## Usage

```js
var slashEscape = require('slash-escape');

slashEscape.escape('/foo/bar/baz');
// zSfoozSbarzSbazZ

slashEscape.unescape('zSfoozSbarzSbazZ');
// /foo/bar/baz
```

## About

This is a JavaScript implementation of the slash escape mechanism used by [flow](flowtype.org). https://github.com/facebook/flow/blob/22588e4e/hack/utils/path.ml#L56-L91
