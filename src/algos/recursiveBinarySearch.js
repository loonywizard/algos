const { expect } = require('../validators/assert')

function binarySearch(list, number, head = 0, tail = list.length - 1) {
  const guessedIndex = Math.floor((head + tail) / 2)
  const guessedElement = list[guessedIndex]

  if (guessedElement === number) return guessedIndex

  if (head === tail) return null
  
  if (guessedElement > number) return binarySearch(list, number, head, guessedIndex - 1)

  return binarySearch(list, number, guessedIndex + 1, tail)
}

const LIST = [1, 2, 4, 10, 32, 45, 1002, 1250]

LIST.forEach((value, index) => {
  expect(binarySearch(LIST, value)).toBe(index)
})

expect(binarySearch(LIST, 3)).toBe(null)
expect(binarySearch(LIST, 0)).toBe(null)
expect(binarySearch(LIST, 1003)).toBe(null)
expect(binarySearch(LIST, 4000)).toBe(null)
