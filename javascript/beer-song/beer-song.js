//
// This is only a SKELETON file for the 'Beer Song' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const lyrics = (bottles) => {
  if (bottles === 0) {
    return [
      "No more bottles of beer on the wall, no more bottles of beer.",
      "Go to the store and buy some more, 99 bottles of beer on the wall.",
    ];
  } else if (bottles === 1) {
    return [
      "1 bottle of beer on the wall, 1 bottle of beer.",
      "Take it down and pass it around, no more bottles of beer on the wall.",
    ];
  } else if (bottles === 2) {
    return [
      "2 bottles of beer on the wall, 2 bottles of beer.",
      "Take one down and pass it around, 1 bottle of beer on the wall.",
    ];
  } else if (bottles > 2) {
    return [
      `${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`,
      `Take one down and pass it around, ${
        bottles - 1
      } bottles of beer on the wall.`,
    ];
  } else {
    return [];
  }
};

export const recite = (bottles, limit) =>
  limit <= 1
    ? lyrics(bottles)
    : lyrics(bottles).concat("", recite(bottles - 1, limit - 1));