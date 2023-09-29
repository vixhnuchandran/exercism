//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (old) => {
  let res = {};
  for (let key in old) {
    for (let value of old[key]){
      res[value.toLowerCase()] = Number(key)
    }
  }
  return res

};
