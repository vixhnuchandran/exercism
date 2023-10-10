//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


const DISCOUNT = [1, 0.95, 0.9, 0.8, 0.75]

export const cost = (books) =>
  books
    .generateSets()
    .optimizeForGroupsOfFour()
    .reduce((acc, value) => acc + DISCOUNT[value - 1] * value * 800, 0)

Array.prototype.generateSets = function () {
  const books = [...this]
  const sets = []
  while (books.length > 0) {
    // Create a subset with unique books
    const subset = Array.from(new Set(books))
    // Add the subset to sets
    sets.push(subset)
    // Remove the books in the subset from the books array
    subset.forEach(book => books.splice(books.indexOf(book), 1))
  }
  return sets.map(s => s.length) // Replace array with length of each array
}

Array.prototype.optimizeForGroupsOfFour = function () {
  const optimized = [...this]
  while (optimized.includes(5) && optimized.includes(3)) {
    optimized[optimized.indexOf(5)] = 4
    optimized[optimized.indexOf(3)] = 4
  }
  return optimized
}