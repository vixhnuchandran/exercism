//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (num) => {
  let cNum = num.replace(/[^0-9a-zA-Z]+/gi, ''); // Consistent use of a-zA-Z

  if (/[a-zA-Z]+/.test(cNum)) { // Consistent use of a-zA-Z
    throw new Error('Letters not permitted');
  }
  if (/[@:!]/.test(num)) {
    throw new Error('Punctuations not permitted');
  }
if (cNum.length < 10) {
    throw new Error('Incorrect number of digits');
}
if (cNum.length === 10 && cNum[0] === '0') {
    throw new Error('Area code cannot start with zero')
}
if (cNum.length === 10 && cNum[0] === '1') {
    throw new Error('Area code cannot start with one')
}
if (cNum.length === 10 && cNum[3] === '0') {
    throw new Error('Exchange code cannot start with zero')
}
if (cNum.length === 10 && cNum[3] === '1') {
    throw new Error('Exchange code cannot start with one')
}


if (cNum.length === 11 && cNum[1] === '0') {
    throw new Error('Area code cannot start with zero')
}
if (cNum.length === 11 && cNum[1] === '1') {
    throw new Error('Area code cannot start with one')
}
if (cNum.length === 11 && cNum[4] === '0') {
    throw new Error('Exchange code cannot start with zero')
}
if (cNum.length === 11 && cNum[4] === '1') {
    throw new Error('Exchange code cannot start with one')
}
if (cNum.length === 11 && cNum[0] !== '1') {
    throw new Error('11 digits must start with 1');
}

if (cNum.length === 11 && cNum[0] === '1') {
    const newNum = cNum.slice(1);
    return newNum
}

if (cNum.length > 11) {
    throw new Error('More than 11 digits');
}

if (cNum)
    return cNum;
}