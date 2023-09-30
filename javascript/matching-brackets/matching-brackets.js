//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//



export const isPaired = (str) => {
  const stack = [];
  const brackets = {
    '}': '{',
    ']': '[',
    ')': '('
  };

  for (const char of str) {
    if (brackets[char]) {
      const topElement = stack.pop();

      if (topElement !== brackets[char]) {
        return false; 
      }
    } else if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    }
  }

  return stack.length === 0;
};

