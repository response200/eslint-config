const defaultConfig = require('./default')
const recommended = require('./recommended')
const recommendedJsx = require('./recommended-jsx')
const recommendedTypeScript = require('./recommended-typescript')

const configs = {
  default: defaultConfig,
  recommended,
  recommendedJsx,
  recommendedTypeScript
}

module.exports = { configs }
