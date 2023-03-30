function nonRepeatingChar(text) {
  if (text.length == 1) {
    return text;
  } else if (text[0] != text[1]){
    return text[0];
  } else {
    return "";
  }
}

module.exports = nonRepeatingChar;
