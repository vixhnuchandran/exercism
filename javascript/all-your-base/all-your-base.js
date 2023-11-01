//
// This is only a SKELETON file for the 'All Your Base' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function convert(numbers, fromBase, toBase) {
    if (fromBase <= 1) throw new Error("Wrong input base");
    if (toBase <= 1) throw new Error("Wrong output base");
    if (numbers.some(num => num >= fromBase || num < 0) || (numbers[0] === 0 && numbers.length > 1) || numbers.length === 0) throw new Error("Input has wrong format");

    let base10Sum = numbers.reverse().reduce((sum, num, i) => sum + num * fromBase ** i, 0);
    let toBaseNums = [];

    do {
        toBaseNums.push(base10Sum % toBase);
        base10Sum = Math.trunc(base10Sum / toBase);
    } while (base10Sum);

    return toBaseNums.reverse();
}
