// thanks a lot to https://www.techiedelight.com/check-given-array-represents-min-heap-not

function isMinHeap(heapArray: number[], index = 0): boolean {
  const leftChildIndex = 2 * index + 1
  const rightChildIndex = 2 * index + 2

  if (leftChildIndex >= heapArray.length) return true

  const isLeftTreeMinHeap = heapArray[leftChildIndex] === undefined ? true : (
    heapArray[index] <= heapArray[leftChildIndex] && isMinHeap(heapArray, leftChildIndex)
  )
  const isRightTreeMinHeap = heapArray[rightChildIndex] === undefined ? true : (
    heapArray[index] <= heapArray[rightChildIndex] && isMinHeap(heapArray, rightChildIndex)
  )

  return isLeftTreeMinHeap && isRightTreeMinHeap
}

export { isMinHeap }
