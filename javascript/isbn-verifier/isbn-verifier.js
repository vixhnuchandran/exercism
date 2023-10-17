//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (input) => {

  input = input.trim().replace(/[^0-9X]/g, '');
  let cleanInput = input.replace(/X(?!$)/g, '');
  let sum =0;

  if (cleanInput.length !== 10) return false;
  
  for (let i = 0; i < cleanInput.length; i++) {
    if (cleanInput[i] === 'X') { 
      sum += 10 
    }
    else {
    sum += parseInt(cleanInput[i]) * (10 - i);
    }
  }
  return (sum % 11 === 0? true : false);
};
