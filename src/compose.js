function compose(...fns) {
  return function(x) {
    return fns.reduceRight((accumulator, fn) => fn(accumulator), x)
  }
}

module.exports = { compose }
