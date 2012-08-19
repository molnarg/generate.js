var NumberSchema = require('../Schema').extensions.NumberSchema

// parameters:
// - minimum
// - maximum
// - exclusiveMinimum
// - exclusiveMaximum
// - divisibleBy
NumberSchema.prototype.generate = function() {
  var length, random
    , min = this.minimum
    , max = this.maximum
    , step = this.divisibleBy

  // If there's no declared maximum or minimum then assigning a reasonable value
  if (min === -Infinity || max === Infinity) {
    length = 10
    while (Math.random() < 0.5) length = length * 10

    if (min === -Infinity && max === Infinity) {
      min = length / -2
      max = length / +2
    } else if (min === -Infinity) {
      min = max - length
    } else if (max === Infinity) {
      max = min + length
    }
  }

  // Choosing random number from a continuous set
  if (step === 0) {
    length = max - min
    do {
      random = min + Math.random()*length
    } while ((this.exclusiveMinimum && random === min) || (this.exclusiveMaximum && random === max))

  // Choosing random number from a discrete set
  } else {
    min = Math.ceil(min / step) * step
    max = Math.floor(max / step) * step

    if (this.exclusiveMinimum && min === this.minimum) min += step
    if (this.exclusiveMaximum && max === this.maximum) max -= step

    if (min > max) return undefined

    length = Math.round((max - min) / step) + 1
    random = min + step * Math.floor(Math.random()*length)
  }

  return random
}
