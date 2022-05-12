const {capitalize} = require('./capitalize');

describe('Capitalizing a string', () => {
  test('One word', () => {
    expect(capitalize('verylongword')).toBe('Verylongword');
  });

  test('Two words', () => {
    expect(capitalize('very long word')).toBe('Very Long Word');
  });

  test('Two words punctuation', () => {
    expect(capitalize('very. long word')).toBe('Very. Long Word');
  });

  test('Empty String', () => {
    expect(capitalize('')).toBe('');
  });

  test('Trailling spaces', () => {
    expect(capitalize(' hello ma name is ')).toBe('Hello Ma Name Is');
  });

  test('Not a string', () => {
    expect(capitalize(1)).not.toBeTruthy();
  });
});
