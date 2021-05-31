import { haveSameLength, isSorted, expect }  from '../../validators'
import { generateRandomArray } from '../../utils/generateRandomArray'
import { swap } from '../../utils/swap'


function partition(arr: number[], start: number, end: number): number {
  const pivotIndex = start
  const pivotElement = arr[pivotIndex]

  while (start < end) {
    while (start < arr.length && arr[start] <= pivotElement) start++
    while (arr[end] > pivotElement) end--

    if (start < end) swap(arr, start, end)
  }

  swap(arr, pivotIndex, end)

  return end
}


function qsort(arr: number[], start = 0, end = arr.length - 1) {
  if (start >= end) return

  const p = partition(arr, start, end)

  qsort(arr, start, p - 1)
  qsort(arr, p + 1, end)
}


const TEST_CASES = [
  generateRandomArray(0, 0, 0),
  generateRandomArray(1, 1, 5),
  generateRandomArray(1000, -1000, 1000),
  generateRandomArray(1001, -1001, 1001),
]

for (let testCase of TEST_CASES) {
  const copyOfTestCase = [...testCase]

  qsort(copyOfTestCase)

  expect(isSorted(copyOfTestCase)).toBe(true)
  expect(haveSameLength(copyOfTestCase, testCase)).toBe(true)
}

export { qsort }
