'use strict';

module.exports = function(packageJson, logger) {
  const config = require('./config')(logger);
  const createServer = require('./api');
  const domain = require('./domain')();

  return createServer(packageJson, config.api.port, domain).then((server) => {
    return {server, config, domain};
  });
};
