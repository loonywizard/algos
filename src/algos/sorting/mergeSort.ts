function mergeSort(arr: number[], shiftIndex = 0): number[] {
  if (arr.length < 2) return arr

  const middleElementIndex = Math.round(arr.length / 2)

  const leftElements = arr.slice(0, middleElementIndex)
  const rightElements = arr.slice(middleElementIndex)

  const sortedLeftElements = mergeSort(leftElements, shiftIndex)
  const sortedRightElements = mergeSort(rightElements, shiftIndex + middleElementIndex)

  let i = 0, j = 0, k = 0

  while (i < sortedLeftElements.length && j < sortedRightElements.length) {
    if (sortedLeftElements[i] < sortedRightElements[j]) arr[k++] = sortedLeftElements[i++]
    else arr[k++] = sortedRightElements[j++]
  }

  while (i < sortedLeftElements.length) arr[k++] = sortedLeftElements[i++]
  while (j < sortedRightElements.length) arr[k++] = sortedRightElements[j++]

  return arr
}


export { mergeSort }
