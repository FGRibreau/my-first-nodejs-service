'use strict';

const Hapi = require('hapi');
const Swaggerize = require('swaggerize-hapi');
const activateSwagger = require('redsmin-api-documentation-ui/hapi');

module.exports = function(packageJson, PORT, models) {

  const server = new Hapi.Server();

  server.connection({
    port: PORT
  });

  return when(server.register([{
      register: Swaggerize,
      options: {
        api: require('./definition')(packageJson),
        docspath: '/api/definition.json',
        handlers: require('./handlers')(models)
      }
    }]))
    .then(activateSwagger(server))
    .then(function() {
      return when.promise(function(resolve, reject) {
        server.start(function(err) {
          if (err) {
            return reject(err);
          }

          resolve(server);
        });
      });
    });
};
