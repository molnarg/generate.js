var ReferenceSchema = require('../Schema').patterns.ReferenceSchema

// parameters:
// - value
ReferenceSchema.prototype.generate = function() {
  return this.value
}
