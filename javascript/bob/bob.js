//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = message => {

  if (message.trim().length === 0) {
    return 'Fine. Be that way!';
  } else if (/[a-z]/i.test(message) && message === message.toUpperCase() && message.trim().endsWith('?')) {
    return 'Calm down, I know what I\'m doing!';
  } else if (/[a-z]/i.test(message) && message === message.toUpperCase()) {
    return 'Whoa, chill out!';
  } else if (message.trim().endsWith('?')) {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }
};
