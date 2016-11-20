# anybase [![Build Status](https://travis-ci.org/zokker13/anybase.svg?branch=master)](https://travis-ci.org/zokker13/anybase)
Switch the base of numbers dynamically

## Installation
`npm i anybase --save`

## Usage
```js
const anybase = require('anybase');

// Encode a number to hex
console.log(anybase.encode(42, anybase.alphabets.hex)); // 2A

// Define your own alphabet
const custom = [
  'g', 'h', '7', '4', 'z'
];

console.log(anybase.encode(42, custom)); // h47
```

## Existing alphabets
The following alphabets are existing:
* Binary
  * `0 1`
* Octal
  * `0 1 ... 7`
* Decimal
  * `0 1 ... 9`
* Hexadecimal
  * `0 1 ... F`

Select them using the `anybase.alphabets` key.
