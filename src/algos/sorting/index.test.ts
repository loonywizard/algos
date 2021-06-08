import { bubbleSort } from './bubbleSort'
import { heapSort  } from './heapSort'
import { insertionSort  } from './insertionSort'
import { mergeSort  } from './mergeSort'
import { quickSort  } from './quickSort'

import { isSorted }  from '../../validators'
import { generateRandomArray } from '../../utils/generateRandomArray'



const TEST_CASES = [
  generateRandomArray(0, 0, 0),
  generateRandomArray(1, 1, 5),
  generateRandomArray(1000, -1000, 1000),
  generateRandomArray(1001, -1001, 1001),
]


const SORTING_ALGOS = [
  { testName: 'bubble sort', algo: bubbleSort },
  { testName: 'heap sort', algo: heapSort },
  { testName: 'insertion sort', algo: insertionSort },
  { testName: 'merge sort', algo: mergeSort },
  { testName: 'quick sort', algo: quickSort },
]


describe('sorting algos', () => {
  test.each(SORTING_ALGOS)('$testName', ({ algo }) => {
    TEST_CASES.forEach((testCaseArray) => {
      const unsortedArrayCopy = [...testCaseArray]
      const sortedArray = algo(unsortedArrayCopy)
        
      expect(isSorted(sortedArray)).toBe(true)
      expect(sortedArray).toHaveLength(testCaseArray.length)  
    })
  })
})
