//
// This is only a SKELETON file for the 'Diamond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const spaceRow = (length) => {
  let row = [];
  for (let i = 0; i < length; i++) {
    row.push(' ');
  }
  return row;
}


const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const rows = (alpha) => {

  let result = [];
  let alphaIndex = alphabets.indexOf(alpha)
  let rowSize = (alphaIndex * 2) + 1
  const center = Math.floor(rowSize / 2);

  for (let i = 0; i <= center; i++) {
    let row = spaceRow(rowSize);
    row.splice(center + i, 1, alphabets[i]);
    row.splice(center - i, 1, alphabets[i]);
    result.push(row.join(""));
  }
  for (let i = result.length - 2; i >= 0; i--) {
    result.push(result[i]);
  }

  return result;



}