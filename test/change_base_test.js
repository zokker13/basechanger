const should = require('should');

const anybase = require('./../');

describe('basechanger#changeBase()', () => {

  it('should change bases (oct -> hex)', () => {

    should.equal(basechanger.changeBase('11467', basechanger.alphabets.oct, basechanger.alphabets.hex), '1337');
    should.equal(basechanger.changeBase('-22', basechanger.alphabets.oct, basechanger.alphabets.hex), '-12');
    should.equal(basechanger.changeBase('156', basechanger.alphabets.oct, basechanger.alphabets.hex), '6E');
  });

});
