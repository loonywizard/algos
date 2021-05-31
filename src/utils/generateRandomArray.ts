import { generateRandomNumber } from './generateRandomNumber'

function generateRandomArray(n: number, min: number, max: number): number[] {
  const arr = []

  for (let i = 0; i < n; i++) {
    arr.push(generateRandomNumber(min, max))
  }

  return arr
}

export { generateRandomArray }
