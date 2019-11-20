const { isSorted } = require('./isSorted')

function removeDuplicates(arr) {
  if (!isSorted(arr)) throw new Error('removeDuplicates accepts only sorted array')

  if (arr.length <= 1) return arr

  const result = [arr[0]]
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) continue

    result.push(arr[i])
  }

  return result
}

module.exports = { removeDuplicates }
