# [dva-shared-state](#) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/chiaweilee/dva-shared-state/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/dva-shared-state.svg?style=flat)](https://www.npmjs.com/package/dva-shared-state) [![npm downloads](https://img.shields.io/npm/dm/dva-shared-state.svg)](https://npmcharts.com/compare/dva-shared-state?minimal=true) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#)

Markdown(\*.md) component plugin for umi. 

*Get shared store state from dva without connect.*

## Installation

```
npm install dva-shared-state
```

## Demo

https://chiaweilee.github.io/dva-shared-state/

## Usage

#### dva API

At `app.use(hooks)` of `dva`

```js
import createSharedState from 'dva-shared-state';
app.use(createSharedState);
```

Or, `src/app.(js|ts)` in `umi.js`

#### use state


```js
import { state } from 'dva-shared-state';
console.log(state);
```
