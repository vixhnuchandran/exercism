//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (n) => {

  if (n===0) return [];
  let pTriangle = [[1],];
  for (let i = 1; i < n; i++) {
      let row = [1];
      for (let j = 1; j < i; j++) {
          let value = pTriangle[i - 1][j - 1] + pTriangle[i - 1][j];
          row.push(value)
      }
      row.push(1)
      pTriangle.push(row)
  }

  return pTriangle;
};
