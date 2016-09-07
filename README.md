[![Build Status](https://travis-ci.org/aichholzer/baraja.svg?branch=master)](https://travis-ci.org/aichholzer/baraja)
# baraja
Shuffle, just about anything!


## Install
```
npm install --save baraja
```


### Use
```
const baraja = require('baraja');
```

### API

#### .fromArray(array, sort)
Shuffle multiple strings into one.<br />
`array`: An array of strings to be shuffled into one.<br />
`sort`: `asc` || `desc` - Order strings by length before shuffling them.

```
const baraja = require('baraja');

baraja.fromArray([
  'hello',
  'developer',
  'friends'
]);
// 'hdfeerlvileeolnopders'

baraja.fromArray([
  'hello',
  'developer',
  'friends'
], 'asc');
// 'hfderelivleeonldsoper'

baraja.fromArray([
  'hello',
  'developer',
  'friends'
], 'desc');
// 'dfherevileellnoodpser'
```


### Contribute
```
fork https://github.com/aichholzer/baraja/
```


### License

[MIT](https://github.com/aichholzer/baraja/blob/master/LICENSE)
