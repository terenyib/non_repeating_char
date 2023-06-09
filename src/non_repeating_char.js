function nonRepeatingChar(text) {
  let result = "";
  for(let i = 0; i < text.length; i++) {
    let currentChar = text[i];
    let text2 = text.slice(0, i).concat(text.slice(i + 1));
    if (!result && !text2.toUpperCase().includes(currentChar) && !text2.toLowerCase().includes(currentChar)) {
      result = currentChar;
    }
  }
  return result;
}

module.exports = nonRepeatingChar;
