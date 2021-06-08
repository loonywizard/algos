import { swap } from '../../utils/swap'


function insertionSort(arr: number[]): number[] {
  const n = arr.length

  for (let i = 1; i < n; i++) {
    let currentElementIndex = i

    for (let j = i - 1; j >= 0; j--) {
      if (arr[currentElementIndex] >= arr[j]) break

      swap(arr, currentElementIndex--, j)
    }
  }

  return arr
}


export { insertionSort }
