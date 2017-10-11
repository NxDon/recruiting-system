require('should');

const removeWithoutSame = require('../src/remove-without-same');

describe('remove without same', ()=> {
  it('should return an array without the same as item', () => {
    const array = [2, 2, 4, 3, 6];
    const item = 2;
    const result = removeWithoutSame(array, item);
    result.should.eql([4, 3, 6]);
  });
});