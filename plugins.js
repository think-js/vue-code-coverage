// common Cypress plugin file you can point at to have the
// code coverage tasks registered correctly. From your "cypress.json" file
// {
//   "pluginsFile": "vue-code-coverage/plugins",
//   "supportFile": "vue-code-coverage/support"
// }
//
module.exports = (on, config) => {
  require('./task')(on, config)
  // IMPORTANT to return the config object
  // with the any changed environment variables
  return config
}
