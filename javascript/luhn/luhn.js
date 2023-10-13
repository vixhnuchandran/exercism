//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (num) => {
  num = num.replace(/ /g, '').trim();
  let sum = 0;
  
  if (num.length < 2) return false;

  for (let i = num.length - 2; i >= 0; i -= 2) {
    let doubleNum = parseInt(num[i]) * 2;
    if (doubleNum > 9) doubleNum = doubleNum - 9;
    num = num.substring(0, i) + doubleNum + num.substring(i + 1);
  }

  sum = num.split('').map(char => parseInt(char)).reduce((acc, char) => acc += char, 0);

  return sum % 10 == 0;
};
