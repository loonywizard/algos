function swap(arr: number[], firstElementIndex: number, secondElementIndex: number): void {
  const t = arr[firstElementIndex]
  arr[firstElementIndex] = arr[secondElementIndex]
  arr[secondElementIndex] = t
}

export { swap }
