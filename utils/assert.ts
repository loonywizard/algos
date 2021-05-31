function expect<T>(actualValue: T) {
  function toBe(expectedValue: T) {
    if (actualValue !== expectedValue) {
      throw new Error(`Expected ${expectedValue}, got: ${actualValue}`)
    }
  }

  return { toBe }
}

export { expect }
