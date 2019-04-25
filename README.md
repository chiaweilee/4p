# [4p](#) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chiaweilee/aliba/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/aliba.svg?style=flat)](https://www.npmjs.com/package/aliba) [![npm downloads](https://img.shields.io/npm/dm/aliba.svg)](https://npmcharts.com/compare/aliba?minimal=true) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

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
