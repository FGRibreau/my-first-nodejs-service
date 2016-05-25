'use strict';

describe('config', () => {
  var config;
  var silentLogger = {
    info: _.noop
  };

  beforeEach(() => {
    delete process.env.API_PORT;
    loadConfig();
  });

  it('should yield the default config.port number', () => {
    t.strictEqual(config.api.port, 8080);
  });

  describe('with env variables', () => {
    beforeEach(() => {
      process.env.API_PORT = 8081;
      loadConfig();
    });

    it('should yield the config.port number from the env variable if defined', () => {
      t.strictEqual(config.api.port, 8081);
    });
  });

  // helpers
  function loadConfig() {
    config = require('./config')(silentLogger);
  }
});
