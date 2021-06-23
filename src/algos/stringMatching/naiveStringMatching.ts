function naiveStringMatcher(text: string, pattern: string): number[] {
  const n = text.length
  const m = pattern.length
  
  const matches = []

  for (let i = 0; i < n - m; i++) {
    let j = 0

    while (text[i + j] === pattern[j] && j < m) j++

    if (j === m) matches.push(i)
  }

  return matches
}

export { naiveStringMatcher }
