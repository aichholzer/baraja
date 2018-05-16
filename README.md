# baraja

[![Greenkeeper badge](https://badges.greenkeeper.io/aichholzer/baraja.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/aichholzer/baraja.svg?branch=master)](https://travis-ci.org/aichholzer/baraja)
[![Dependency status](https://gemnasium.com/badges/github.com/aichholzer/baraja.svg)](https://gemnasium.com/github.com/aichholzer/baraja)
[![Downloads](https://img.shields.io/npm/dt/baraja.svg)](https://www.npmjs.com/package/baraja)
[![Always useful](https://img.shields.io/badge/always-useful-ff6400.svg)](https://github.com/aichholzer/baraja)

Shuffle, just about anything!


### Install
```
npm install --save baraja
```


### Use
```
const baraja = require('baraja');
```


### API

#### .weave(array, sort) -> {String}
Weave multiple strings into one.<br />
`array`: An array of strings to be weave into one.<br />
`sort`: `asc` || `desc` - Order strings by length before weaving them.

```
const baraja = require('baraja');

baraja.weave([
  'hello',
  'developer',
  'friends'
]);
// 'hdfeerlvileeolnopders'

baraja.weave([
  'hello',
  'developer',
  'friends'
], 'asc');
// 'hfderelivleeonldsoper'

baraja.weave([
  'hello',
  'developer',
  'friends'
], 'desc');
// 'dfherevileellnoodpser'
```

#### .across(array) -> {Object}
Cross shuffle a list of words.<br />
The input array is always sorted alphabetically.<br />
`array`: An array of strings to be shuffled across.

```
const baraja = require('baraja');

baraja.across([
  'Peter',
  'Paul',
  'Merry',
  'Andrew'
]);
// {
    "Andrew": "Merry",
    "Merry": "Paul",
    "Paul": "Peter",
    "Peter": "Andrew"
}
```


### Contribute
```
fork https://github.com/aichholzer/baraja/
```


### License

[MIT](https://github.com/aichholzer/baraja/blob/master/LICENSE)
