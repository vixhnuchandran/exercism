//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (phrases) => {
  let result = phrases.trim().replace(/[^a-zA-Z\s-]/g, '').replace(/'/g, '');
  console.log(result);
  let perf = result.split(/[\s-]+/).filter(word => word !== "");
  // console.log(perf);
  return perf.reduce((acc, val) => acc += val[0].toUpperCase(), '');
};