import { haveSameLength, isSorted, expect }  from '../../validators'
import { generateRandomArray } from '../../utils/generateRandomArray'
import { swap } from '../../utils/swap'

function insertionSort(arr: number[]): void {
  const n = arr.length

  for (let i = 1; i < n; i++) {
    let currentElementIndex = i

    for (let j = i - 1; j >= 0; j--) {
      if (arr[currentElementIndex] >= arr[j]) break

      swap(arr, currentElementIndex--, j)
    }
  }
}

const TEST_CASES = [
  generateRandomArray(0, 0, 0),
  generateRandomArray(1, 1, 5),
  generateRandomArray(1000, -1000, 1000),
  generateRandomArray(1001, -1001, 1001),
]

for (let testCase of TEST_CASES) {
  const copyOfTestCase = [...testCase]

  insertionSort(copyOfTestCase)

  expect(isSorted(copyOfTestCase)).toBe(true)
  expect(haveSameLength(copyOfTestCase, testCase)).toBe(true)
}

export { insertionSort }
