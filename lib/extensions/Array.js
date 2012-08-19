var ArraySchema = require('../Schema').extensions.ArraySchema

// parameters:
// - itemSchema
ArraySchema.prototype.generate = function() {
  var array = []

  while (array.length < this.min || (array.length < this.max && Math.random() < 0.666)) {
      array.push(this.itemSchema.generate())
  }

  return array
}
