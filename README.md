# basechanger [![Build Status](https://travis-ci.org/zokker13/basechanger.svg?branch=master)](https://travis-ci.org/zokker13/basechanger)
Switch the base of numbers dynamically

## Installation
`npm i basechanger --save`

## Usage
```js
const basechanger = require('basechanger');

// Encode a number to hex
console.log(basechanger.encode(42, basechanger.alphabets.hex)); // 2A

// Define your own alphabet
const custom = [
  'g', 'h', '7', '4', 'z'
];

console.log(basechanger.encode(42, custom)); // h47
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

Select them using the `basechanger.alphabets` key.
