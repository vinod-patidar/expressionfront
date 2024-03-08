export const isValidExpression = (expressionValue) => {
  const validCharsRegex = /^[0-9+\-\s]+$/;
  return validCharsRegex.test(expressionValue);
}

export const hasNestedOperators = (expressionValue) => {
  const allowedOperators = ['+', '-'];
  if (expressionValue.includes(allowedOperators[0]) && expressionValue.includes(allowedOperators[1])) {
    return true;
  }

  const charCount = {};
  for (let char of expressionValue) {
    if (allowedOperators.includes(char)) {
      charCount[char] = (charCount[char] || 0) + 1;
      if (charCount[char] === 2) {
        return true;
      }
    }
  }
  return false;
}
