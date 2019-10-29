const { expect } = require('./assert')
const { isSorted } = require('./isSorted')

function qsort(arr) {
  if (arr.length < 2) return arr

  const baseElementIndex = 0
  const baseElement = arr[baseElementIndex]
  
  const smallerElements = []
  const sameElements = []
  const greaterElements = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === baseElement) sameElements.push(baseElement)
    else if (arr[i] < baseElement) smallerElements.push(arr[i])
    else greaterElements.push(arr[i])
  }

  return [...qsort(smallerElements), baseElement, ...qsort(greaterElements)]
}

const TEST_CASES = [
  [],
  [-10],
  [7],
  [3, 3],
  [3, 3, 3, 3],
  [3, 3, 3, 3, 3],
  [100, 1, 2, 50, 20, 12, -32, -9, 19],
  [1, 2, 3, 4, 5],
  [8, 9, 8, 8, 9, 9],
]

for (let testCase of TEST_CASES) {
  expect(isSorted(qsort(testCase))).toBe(true)
}
