function isMaxHeap(heapArray: number[], index = 0): boolean {
  const leftChildIndex = 2 * index + 1
  const rightChildIndex = 2 * index + 2

  if (leftChildIndex >= heapArray.length) return true

  const isLeftTreeMaxHeap = heapArray[leftChildIndex] === undefined ? true : (
    heapArray[index] >= heapArray[leftChildIndex] && isMaxHeap(heapArray, leftChildIndex)
  )
  const isRightTreeMaxHeap = heapArray[rightChildIndex] === undefined ? true : (
    heapArray[index] >= heapArray[rightChildIndex] && isMaxHeap(heapArray, rightChildIndex)
  )

  return isLeftTreeMaxHeap && isRightTreeMaxHeap
}

export { isMaxHeap }
