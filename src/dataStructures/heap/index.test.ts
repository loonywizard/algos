import { MaxHeap } from './maxHeap'
import { MinHeap } from './minHeap'

import { generateRandomArray } from '../../utils/generateRandomArray'
import { isMinHeap, isMaxHeap  } from '../../validators'


const RANDOM_ARRAY = generateRandomArray(10 ** 3, -(10 ** 2), 5 * 10 ** 2)

const HEAPS = [
  { heapName: 'max heap', heapDataStructure: MaxHeap, heapValidator: isMaxHeap },
  { heapName: 'min heap', heapDataStructure: MinHeap, heapValidator: isMinHeap },
]

describe('heap data structure', () => {
  test.each(HEAPS)('$heapName', ({ heapDataStructure, heapValidator }) => {
    const heap = new heapDataStructure()

    RANDOM_ARRAY.forEach((arrayElement) => {
      heap.insert(arrayElement)
      expect(heapValidator(heap._getAllNodesArray())).toBe(true)
    })

    while (!heap.isEmpty()) {
      heap.pop()
      expect(heapValidator(heap._getAllNodesArray())).toBe(true)
    }
  })
})