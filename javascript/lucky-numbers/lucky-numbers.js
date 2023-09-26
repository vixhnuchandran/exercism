// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
    return Number(array1.join('')) + Number(array2.join(''))}


/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
    return value.toString() === value.toString().split('').reverse().join('')
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(userInput) {
    // Check if userInput is empty or undefined
    if (!userInput) {
        return 'Required field';
    }

    // Convert userInput to a number and check if it's not a valid number
    const numberValue = Number(userInput);
    if (isNaN(numberValue) || numberValue === 0) {
        return 'Must be a number besides 0';
    }

    // If userInput is valid, return an empty string
    return '';
}
