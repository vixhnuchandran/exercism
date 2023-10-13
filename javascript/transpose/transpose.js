//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    const longest = Math.max(...arr.slice(i).map((element) => element.length));

    for (let j = 0; j < longest; j++) {
      const count = result[j] || "";

      result[j] = count + (arr[i][j] ? arr[i][j] : " ");
    }
  }

  return result;
};