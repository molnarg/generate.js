var RegexpSchema = require('../Schema').patterns.RegexpSchema
  , RandExp = require('randexp')

var defaultRandExp = new RandExp(/^[a-zA-Z0-9]{1,10}$/)

// parameters:
// - regexp
RegexpSchema.prototype.generate = function() {
  if (!this.randexp) {
    this.randexp = this.regexp ? new RandExp(this.regexp)
                               : defaultRandExp
  }

  return this.randexp.gen()
}
