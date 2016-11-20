const should = require('should');

const basechanger = require('./../');

describe('basechanger#decode()', () => {

  it('should decode sample numbers from binary', () => {

    should.equal(basechanger.decode('11', basechanger.alphabets.bin), 3);
    should.equal(basechanger.decode('-10111', basechanger.alphabets.bin), -23);
    should.equal(basechanger.decode('-101010', basechanger.alphabets.bin), -42);
    should.equal(basechanger.decode('10100111001', basechanger.alphabets.bin), 1337);
  });

  it('should decode sample numbers from hex', () => {

    should.equal(basechanger.decode('3', basechanger.alphabets.hex), 3);
    should.equal(basechanger.decode('-17', basechanger.alphabets.hex), -23);
    should.equal(basechanger.decode('-2A', basechanger.alphabets.hex), -42);
    should.equal(basechanger.decode('539', basechanger.alphabets.hex), 1337);
  });
});
