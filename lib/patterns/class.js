var ClassSchema = require('../Schema').patterns.ClassSchema

// parameters:
// - constructor - the constructor of the target type
ClassSchema.prototype.generate = function() {
  if (this.constructor === Function) {
    // Creating a function
    return function() {}

  } else {
    // Creating an object with the given constructor's prototype
    var Constructor = function() {}
    Constructor.prototype = this.constructor.prototype

    return new Constructor()
  }
}
