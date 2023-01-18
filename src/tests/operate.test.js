import operate from '../logic/operate';

describe('operate', () => {
  test('adds two numbers', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  test('subtracts two numbers', () => {
    expect(operate(5, 3, '-')).toBe('2');
  });

  test('multiplies two numbers', () => {
    expect(operate(4, 5, 'x')).toBe('20');
  });

  test('divides two numbers', () => {
    expect(operate(10, 2, '÷')).toBe('5');
  });

  test('finds modulus of two numbers', () => {
    expect(operate(5, 3, '%')).toBe('2');
  });

  test('throws error for unknown operation', () => {
    expect(() => operate(1, 2, '$')).toThrow('Unknown operation');
  });
});
