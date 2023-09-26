/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the prize of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */

const itemList = {
  'Margherita': 7,
  'Caprese': 9,
  'Formaggio': 10,
  'ExtraSauce': 1,
  'ExtraToppings': 2
}
export function pizzaPrice(pizza, ...extras) {

  return (itemList[pizza]+ (extras.length ? pizzaPrice(...extras) : 0))


}


/**
 * Calculate the prize of the total order, given individual orders
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 * 
 * 
 */
export function orderPrice(pizzaOrders) {
  
  return pizzaOrders.reduce((cost, order) => cost +pizzaPrice(order.pizza, ...order.extras), 0)
}

