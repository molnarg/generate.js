var AnythingSchema = require('../Schema').patterns.AnythingSchema
  , nothing = require('../Schema').patterns.NothingSchema.instance

// no parameters.
AnythingSchema.prototype.generate = function() {
  var type = [{schema:nothing}, Boolean, Number, String, Array, Object][Math.floor(Math.random()*6)]
  return type.schema.unwrap().generate()
}
