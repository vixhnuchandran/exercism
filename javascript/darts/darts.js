//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x,y) => {
  const distanceFromOrigin = Math.sqrt(x **2 + y**2);
  if (distanceFromOrigin<=1) return 10;
  else if  (distanceFromOrigin<=5) return  5;
  else if  (distanceFromOrigin<=10) return 1;
  else return 0;

};