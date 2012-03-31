@echo off
title node.js
rem use utf-8 encoding in console output:
chcp 65001
rem node "node-js-development-mode.js" --main-file code/web/main.coffee --coffee-script "node_modules/coffee-script/bin/coffee" --watch "['code/**/*.js', 'code/**/*.coffee']" --options "{ \"server\": \"home\" }"
node "node-js-development-mode.js" --main-file index.js --watch "['**/*.js', '**/*.coffee']" --options "{ \"server\": \"home\" }"
rem node --debug-brk "node-js-development-mode.js" --main-file app.js --watch "['**/*.js', '**/*.coffee']" --options "{ \"server\": \"home\" }"
pause
