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


function quickSort(arr: number[], start = 0, end = arr.length - 1): number[] {
  if (start >= end) return arr

  const p = partition(arr, start, end)

  quickSort(arr, start, p - 1)
  quickSort(arr, p + 1, end)

  return arr
}


export { quickSort }
