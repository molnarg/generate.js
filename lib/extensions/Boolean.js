var BooleanSchema = require('../Schema').extensions.BooleanSchema

// no parameters.
BooleanSchema.prototype.generate = function() {
    return Math.random() < 0.5
}
