// @ts-check

import { verify } from "crypto";
import { fstat } from "fs";

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let mulCard = 0;
  stack.forEach((num) => { if (num === card) { mulCard += 1; } })
  return mulCard
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  return type ? stack.filter(num => num % 2 === 0).length : stack.filter(num => num % 2 !== 0).length;
}
