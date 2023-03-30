const nonRepeatingChar = require('./non_repeating_char');

describe('US-1', () => {
  it('Given text "a" When I check first non-repeating Then the result is "a"', () => {
    expect(nonRepeatingChar("a")).toBe("a");
  });
  it('Given text "z" When I check first non-repeating Then the result is "z"', () => {
    expect(nonRepeatingChar("z")).toBe("z");
  });
});
describe('US-2', () => {
  it('Given text "ab" When I check first non-repeating Then the result is "a"', () => {
    expect(nonRepeatingChar("ab")).toBe("a");
  });
  it('Given text "aa" When I check first non-repeating Then the result is ""', () => {
    expect(nonRepeatingChar("aa")).toBe("");
  });
});
describe('US-3', () => {
  it('Given text "aba" When I check first non-repeating Then the result is "b"', () => {
    expect(nonRepeatingChar("aba")).toBe("b");
  });
  it('Given text "aac" When I check first non-repeating Then the result is "c"', () => {
    expect(nonRepeatingChar("aac")).toBe("c");
  });
  it('Given text "abc" When I check first non-repeating Then the result is "a"', () => {
    expect(nonRepeatingChar("abc")).toBe("a");
  });
  it('Given text "aaa" When I check first non-repeating Then the result is ""', () => {
    expect(nonRepeatingChar("aaa")).toBe("");
  });
});
describe('US-4', () => {
  it('Given text "Somestring" When I check first non-repeating Then the result is "o"', () => {
    expect(nonRepeatingChar("Somestring")).toBe("o");
  });
});
