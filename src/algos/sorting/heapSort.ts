import { haveSameLength, isSorted, expect }  from '../../validators'
import { generateRandomArray } from '../../utils/generateRandomArray'
import { MaxHeap } from '../heap/maxHeap'

function heapSort(arr: number[]): void {
  const heap = new MaxHeap()

  arr.forEach((element) => {
    heap.insert(element)
  })

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = heap.removeMaxElement()
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

  heapSort(copyOfTestCase)

  expect(isSorted(copyOfTestCase)).toBe(true)
  expect(haveSameLength(copyOfTestCase, testCase)).toBe(true)
}

export { heapSort }