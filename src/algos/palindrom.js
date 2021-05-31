const { expect } = require('../utils/assert')

function normalizeString(str) {
  return str.toLowerCase().replace(/[ -.,!?]/g, '')
}

function isPalindrom(str) {
  const normalizedStr = normalizeString(str)

  let head = 0;
  let tail = normalizedStr.length - 1

  while (head < tail) {
    if (normalizedStr[head] !== normalizedStr[tail]) return false

    head++
    tail--
  }

  return true
}

expect(isPalindrom('H3h3h')).toBe(true)
expect(isPalindrom('Eva, can I see bees in a cave?')).toBe(true)
expect(isPalindrom('NOTPALINDROM')).toBe(false)
