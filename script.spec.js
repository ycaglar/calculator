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

describe('subtract', () => {
  test('subtracts 1 - 2 to equal -1', () => {
    expect(subtract(1, 2)).toEqual(-1);
  });
  test('subtracts 0 - 0 to equal 0', () => {
    expect(subtract(0, 0)).toEqual(0);
  });
  test('subtracts -1 - -1 to equal 0', () => {
    expect(subtract(-1, -1)).toEqual(0);
  });
});

