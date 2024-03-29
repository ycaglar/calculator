const { add, subtract, multiply, divide } = require('./script')

describe('add', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toEqual(3);
  });
  test('adds 0 + 0 to equal 0', () => {
    expect(add(0, 0)).toEqual(0);
  });
  test('adds 0 + 0 to equal 0', () => {
    expect(add(-1, 1)).toEqual(0);
  });
});