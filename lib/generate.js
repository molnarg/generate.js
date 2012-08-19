var Schema = require('./Schema')

function generate(sch) {
  return Schema.fromJS(sch).generate()
}

generate.fromJSON = function(sch) {
  return Schema.fromJSON(sch).generate()
}

module.exports = generate
