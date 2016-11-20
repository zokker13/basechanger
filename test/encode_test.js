const should = require('should');

const basechanger = require('./../');

describe('basechanger#encode()', () => {

  it('should encode sample numbers to binary', () => {

    should.equal(basechanger.encode(3, basechanger.alphabets.bin), '11');
    should.equal(basechanger.encode(-23, basechanger.alphabets.bin), '-10111');
    should.equal(basechanger.encode(-42, basechanger.alphabets.bin), '-101010');
    should.equal(basechanger.encode(1337, basechanger.alphabets.bin), '10100111001');
  });

  it('should encode sample numbers to hex', () => {

    should.equal(basechanger.encode(3, basechanger.alphabets.hex), '3');
    should.equal(basechanger.encode(-23, basechanger.alphabets.hex), '-17');
    should.equal(basechanger.encode(-42, basechanger.alphabets.hex), '-2A');
    should.equal(basechanger.encode(1337, basechanger.alphabets.hex), '539');
  });
});
