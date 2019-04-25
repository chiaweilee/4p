# [4p](#) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chiaweilee/4p/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/4p.svg?style=flat)](https://www.npmjs.com/package/4p) [![npm downloads](https://img.shields.io/npm/dm/4p.svg)](https://npmcharts.com/compare/4p?minimal=true) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

Test your package in node_modules before publish.

## Installation

```
npm install 4p
```

## Usage Example

test `packages/react-someplugins`

```
{
    "scripts": {
        "4p": "4p packages/my-plugin"
    }
}
```

then,

```
require('my-plugin');
```
