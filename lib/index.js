const path = require('path');

function initAxe (files, config) {
  let configFile = path.join(__dirname, '/config.js');

  // Check config file defined in karma configuration
  if (config.axe && config.axe.config) {
    configFile = config.axe.config;
  }

  files.unshift({
    pattern: configFile,
    included: true,
    served: true,
    watched: false
  });
  
  files.unshift({
    pattern: require.resolve('axe-core'),
    included: true,
    served: true,
    watched: false
  });
}

initAxe.$inject = ['config.files', 'config'];

module.exports = {
  'framework:axe': ['factory', initAxe]
};