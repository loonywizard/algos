const { expect } = require('./utils/assert')

function binarySearch(list, number) {
  let head = 0
  let tail = list.length - 1

  while (head <= tail) {
    const guessedIndex = Math.floor((head + tail) / 2)
    const guessedElement = list[guessedIndex]

    if (number === guessedElement) return guessedIndex
    if (number > guessedElement) head = guessedIndex + 1
    else tail = guessedIndex - 1
  }

  return null
}

const LIST = [1, 2, 4, 10, 32, 45, 1002, 1250]

LIST.forEach((value, index) => {
  expect(binarySearch(LIST, value)).toBe(index)
})

expect(binarySearch(LIST, 3)).toBe(null)
expect(binarySearch(LIST, 0)).toBe(null)
expect(binarySearch(LIST, 1003)).toBe(null)
expect(binarySearch(LIST, 4000)).toBe(null)
