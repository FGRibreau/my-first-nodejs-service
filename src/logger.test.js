'use strict';

describe('logger', () => {
  const logger = require('./logger')(JSONPackage);

  it('should allow us to log', () => {
    t.isFunction(logger.info);
    t.isFunction(logger.debug);
  });
})
