const nonRepeatingChar = require('./non_repeating_char');

describe('US-1', () => {
  it('Given text "a" When I check first non-repeating Then the result is "a"', () => {
    expect(nonRepeatingChar("a")).toBe("a");
  });
  it('Given text "z" When I check first non-repeating Then the result is "z"', () => {
    expect(nonRepeatingChar("z")).toBe("z");
  });
});
