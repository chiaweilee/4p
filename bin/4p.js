#!/usr/bin/env node

var argv = process.argv.slice(2);

require('../lib')(argv[0]);
