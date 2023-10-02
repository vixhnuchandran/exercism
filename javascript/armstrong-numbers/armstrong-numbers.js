//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (num) => {
  const power = num.toString().length
  let total = num.toString().split('').map((n) => n**power).reduce((acc,n) => acc+n)
  return num === total 
  
};
