const { expect } = require('./assert')
const { qsort } = require('./qsort')
const { removeDuplicates } = require('./removeDuplicates')
const { compose } = require('./compose')

function getRange(start, end, arr) {
  if (start === end) return arr[start]

  return `${arr[start]}-${arr[end]}`
}

function compressArray(arr) {
  const normalizedArray = compose(removeDuplicates, qsort)(arr)

  let rangeStartIndex = 0
  const result = []

  for (let i = 1; i < normalizedArray.length; i++) {
    if (normalizedArray[i] - 1 === normalizedArray[i - 1]) continue

    result.push(getRange(rangeStartIndex, i - 1, normalizedArray))

    rangeStartIndex = i
  }

  result.push(getRange(rangeStartIndex, normalizedArray.length - 1, normalizedArray))

  return result.join(',')
}

expect(compressArray([1])).toBe('1')
expect(compressArray([3, 2, 1, 5, 6, -1, 10])).toBe('-1,1-3,5-6,10')
expect(compressArray([5, 7, 7, 7, 8, 9])).toBe('5,7-9')
expect(compressArray([3, 2, 1, 1, 1, 5, 2, 3, 3, 2, 6, -1, 10])).toBe('-1,1-3,5-6,10')
