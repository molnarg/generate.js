var ObjectSchema = require('../Schema').patterns.ObjectSchema
  , RandExp = require('randexp')
  , nothing = require('../Schema').patterns.NothingSchema.instance
  , RegexpSchema = require('../Schema').patterns.RegexpSchema
  , propertyName = new RegexpSchema()

// parameters:
// - stringProps
// - regexpProps
// - other
ObjectSchema.prototype.generate = function() {
  var object = {}

  for (var key in this.stringProps) {
    if (this.stringProps[key].min === 1 || Math.random() < 0.5) {
      object[key] = this.stringProps[key].value.generate()
    }
  }

  var n, property, randexp
  for (var i = 0; i < this.regexpProps.length; i++) {
    property = this.regexpProps[i]
    n = Object.keys(object).filter(function(ikey){ return property.key.test(ikey) }).length

    randexp = new RandExp(property.key)
    while (n < property.min || (n < property.max && Math.random() < 0.5)) {
      key = randexp.gen()
      if (key in object) continue

      object[key] = property.value.generate()
      n += 1
    }
  }

  if (this.other !== nothing) {
    while (Math.random() < 0.5) {
      key = propertyName.generate()
      if (!(key in object)) object[key] = this.other.generate()
    }
  }

  return object
}
