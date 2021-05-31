import { expect }  from '../../utils/assert'
import { isSorted }  from '../../validators/isSorted'
import { haveSameLength }  from '../../validators/haveSameLength'


function swap(arr: number[], firstElementIndex: number, secondElementIndex: number): void {
  const t = arr[firstElementIndex]
  arr[firstElementIndex] = arr[secondElementIndex]
  arr[secondElementIndex] = t
}


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
  const copyOfTestCase = [...testCase]

  qsort(copyOfTestCase)

  expect(isSorted(copyOfTestCase)).toBe(true)
  expect(haveSameLength(copyOfTestCase, testCase)).toBe(true)
}

export { qsort }
