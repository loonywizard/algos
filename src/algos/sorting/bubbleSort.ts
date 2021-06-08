import { swap } from '../../utils/swap'


function bubbleSort(arr: number[]): number[] {
  const n = arr.length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
    }
  }

  return arr
}


export { bubbleSort }
