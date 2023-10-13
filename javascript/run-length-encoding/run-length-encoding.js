//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = text => text.replace(/(\w|\s)\1+/g, (subStr, char) => `${subStr.length}${char}`);
export const decode = text => text.replace(/(\d+)(\w|\s)/g, (_, char, c) => c.repeat(char)); 
