'use strict';

require('./bootstrap');

const JSONPackage = require('./package.json');

// we need to look inside src/ even if it breaks separation of concerns (because we deal here with the chicken & egg issue)
const logger = require('./src/logger')(JSONPackage);

// change default node process name, useful for `ps`
process.title = JSONPackage.title;

require('./src')(JSONPackage, logger).done((pair) => {
  logger.info('Server started at %s', pair.config.api.port);
}, (err) => {
  logger.error('Server start error', String(err));
  throw err;
});
