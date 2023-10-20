//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export const primeFactors = (input) => {
    let factors = [];
    for (let i = 2; i <= input;)
        input % i ? i++ : (factors.push(i), input /= i);
    return factors;
};
