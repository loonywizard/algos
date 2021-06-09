import { MaxHeap } from '../heap/maxHeap'


function heapSort(arr: number[]): number[] {
  const heap = new MaxHeap()

  arr.forEach((element) => {
    heap.insert(element)
  })

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = heap.pop()
  }

  return arr
}


export { heapSort }
