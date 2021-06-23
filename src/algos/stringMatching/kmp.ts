function computePrefixFunction(pattern: string): number[] {
  const m = pattern.length
  const p = [0]
  let k = 0

  for (let i = 1; i < m; i++) {
    while (k > 0 && pattern[k] !== pattern[i]) k = p[k - 1]

    if (pattern[k] === pattern[i]) k++

    p[i] = k
  }

  return p
}

function kmpStringMatcher(text: string, pattern: string): number[] {
  const n = text.length
  const m = pattern.length
  const p = computePrefixFunction(pattern)
  
  const matches = []

  let i = 0
  let j = 0

  while (i < n) {
    if (text[i] === pattern[j]) {
      i++
      j++
    }

    if (j === m) {
      matches.push(i - j)
      j = p[j - 1]
    }
    else if (i < n && text[i] !== pattern[j]) {
      if (j) j = p[j - 1]
      else i++
    }
  }

  return matches
}

export { kmpStringMatcher }
