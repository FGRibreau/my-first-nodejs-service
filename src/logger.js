'use strict';

const Winston = require('winston');
const WinstonLogmatic = require('winston-logmatic');

module.exports = (packageJson) => {
  assert(_.isString(packageJson.name) && packageJson);

  /**
  * Here we have the issue of the chicken and the egg (we want to log inside logmatic common-env startup)
  * So instead of using process.env, we leverage common-env with winston default logger to only retrieve logmatic related configuration
  */
  const config = require('common-env/withLogger')(Winston).getOrElseAll({
    logger: require('./config/config.json').logger
  }).logger;

  let transports = [];

  if (config.transports.console.enabled) {
    transports.push(new Winston.transports.Console(config.transports.console.config));
  }

  if (config.transports.logmatic.enabled) {
    transports.push(new WinstonLogmatic({
      logmatic: {
        token: config.transports.logmatic.config.token,
        defaultProps: {
          appname: packageJson.name,
          hostname: config.transports.logmatic.config.hostname
        }
      }
    }));
  }

  return new Winston.Logger({
    transports: transports,
    timestamp: config.timestamp,
    level: config.level
  });
};
