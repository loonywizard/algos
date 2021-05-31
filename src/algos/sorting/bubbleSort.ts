import { haveSameLength, isSorted, expect }  from '../../validators'
import { generateRandomArray } from '../../utils/generateRandomArray'
import { swap } from '../../utils/swap'

function bubbleSort(arr: number[]): void {
  const n = arr.length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
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

  bubbleSort(copyOfTestCase)

  expect(isSorted(copyOfTestCase)).toBe(true)
  expect(haveSameLength(copyOfTestCase, testCase)).toBe(true)
}

export { bubbleSort }
