var OrSchema = require('../Schema').patterns.OrSchema

// parameters:
// - schemas
OrSchema.prototype.generate = function() {
  return this.schemas[Math.floor(Math.random()*this.schemas.length)].generate()
}
