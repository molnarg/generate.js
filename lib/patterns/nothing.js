var NothingSchema = require('../Schema').patterns.NothingSchema

// no parameters.
NothingSchema.prototype.generate = function() {
  return Math.random() < 0.5 ? null : undefined
}
