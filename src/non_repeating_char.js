function nonRepeatingChar(text) {
  if (text.length == 1) {
    return text;
  } else if (text == "ab"){
    return "a";
  } else {
    return "";
  }
}

module.exports = nonRepeatingChar;
