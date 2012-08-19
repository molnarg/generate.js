module.exports = require('./lib/generate')

// Patterns
require('./lib/patterns/reference')
require('./lib/patterns/nothing')
require('./lib/patterns/anything')
require('./lib/patterns/object')
require('./lib/patterns/or')
require('./lib/patterns/equality')
require('./lib/patterns/regexp')
require('./lib/patterns/class')

// Extensions
require('./lib/extensions/Boolean')
require('./lib/extensions/Number')
require('./lib/extensions/Array')
