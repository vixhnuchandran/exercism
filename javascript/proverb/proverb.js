//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...args) => {

  if (args.length < 2) {
    return args.length === 1
      ? `And all for the want of a ${args[0]}.`
      : '';
  }

  let rhyme = "";
  let qualifier = args.some((item) => typeof item === 'object') ? args.pop() : null;

  
  for (let i = 0; i < args.length - 1; i++) {
      if (typeof args[i] === "object") { break }
      rhyme += `For want of a ${args[i]} the ${args[i + 1]} was lost.\n`;
  }

  if (qualifier){
  rhyme += `And all for the want of a ${qualifier.qualifier} ${args[0]}.`;
  } else {
  rhyme += `And all for the want of a ${args[0]}.`;
  }
  return rhyme;
};