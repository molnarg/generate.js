#!/bin/bash

DEBUG="generate.debug.js"
MIN="generate.min.js"

echo '(function(){'                             >$DEBUG
browserify index.js | head -n -2               >>$DEBUG
echo 'window.generate = require("/index.js");' >>$DEBUG
echo '}())'                                    >>$DEBUG

uglifyjs $DEBUG >$MIN
