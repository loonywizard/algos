function expect(actualValue) {
  function toBe(expectedValue) {
    if (actualValue !== expectedValue) {
      throw new Error(`Expected ${expectedValue}, got: ${actualValue}`)
    }
  }

  return { toBe }
}

module.exports = { expect }
