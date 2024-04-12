const { add, subtract, multiply, divide, operate } = require('./script')

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

describe('multiply', () => {
  test('multiplies 1 * 2 to equal 2', () => {
    expect(multiply(1, 2)).toEqual(2);
  });
  test('multiplies 0 * 0 to equal 0', () => {
    expect(multiply(0, 0)).toEqual(0);
  });
  test('multiplies -1 * -1 to equal 1', () => {
    expect(multiply(-1, -1)).toEqual(1);
  });
});

describe('divide', () => {
  test('divides 1 / 2 to equal -1', () => {
    expect(divide(1, 2)).toEqual(0.5);
  });
  test('divides 0 / 0 to equal ZeroDivisionError', () => {
    expect(divide(0, 0)).toEqual(NaN);
  });
  test('divides -1 / -1 to equal 1', () => {
    expect(divide(-1, -1)).toEqual(1);
  });
});

describe('operate', () => {
  test('calls the appropriate operator function based on the user input', () => {
    expect(operate(5, '+', -3)).toEqual(2);
  })
});