'use strict';
var deepExtend = require('deepmerge');

module.exports = function(packageJson) {
  /**
   * Define a new route
   * @param  {Object} options
   * @return {Object} extended `options` with default parameters
   */
  function def(options) {
    return deepExtend({
      tags: ['my-first-nodejs-service'],
      summary: 'not-defined',
      description: 'not-defined',
      operationId: 'not-defined',
      produces: ['application/vnd.api+json'],
      parameters: [],
      responses: {
        200: {
          description: 'OK',
          schema: {
            type: 'object',
            required: ['data']
          }
        },
        400: {
          description: 'Bad Request',
          schema: {
            $ref: '#/definitions/Errors'
          }
        },
        404: {
          description: 'Not Found',
          schema: {
            $ref: '#/definitions/Errors'
          }
        },
        500: {
          description: 'Internal Server Error',
          schema: {
            $ref: '#/definitions/Errors'
          }
        }
      }
    }, options);
  }

  return {
    swagger: '2.0',
    schemes: [
      'http'
    ],
    info: {
      title: packageJson.title,
      description: packageJson.description,
      contact: packageJson.author,
      license: packageJson.license,
      version: packageJson.version
    },
    consumes: [
      'application/vnd.api+json'
    ],
    produces: [
      'application/vnd.api+json'
    ],

    /**
     * Definitions
     */
    definitions: require('./definitions'),

    /**
     * Routes
     */
    paths: {
      '/articles': {
        get: def({
          summary: 'List articles',
          description: 'List all the articles',
          operationId: 'listArticles',
          responses: {
            200: {
              description: 'List of articles',
              schema: {
                type: 'object',
                required: 'data',
                properties: {
                  data: {
                    $ref: '#/definitions/Articles'
                  }
                }
              }
            }
          }
        }),
        post: def({
          summary: 'Post article',
          description: 'Post a new article',
          operationId: 'postArticle',
          parameters: [{
            'in': 'body',
            name: 'newArticle',
            description: 'new Article object to post',
            required: true,
            schema: {
              $ref: '#/definitions/NewArticle'
            }
          }],
          responses: {
            200: {
              description: 'New article response',
              schema: {
                type: 'object',
                required: 'data',
                properties: {
                  data: {
                    $ref: '#/definitions/Article'
                  }
                }
              }
            }
          }
        })
      },
      '/articles/{articleId}': {
        get: def({
          summary: 'Get article',
          description: 'Get a single article by id',
          operationId: 'getArticleById',
          parameters: [{
            'in': 'path',
            name: 'articleId',
            description: 'Identifier of the requested article',
            type: 'string',
            format: 'uuid', // @todo currently uuid are not checked
            required: true
          }],
          responses: {
            200: {
              description: 'Article response',
              schema: {
                type: 'object',
                required: 'data',
                properties: {
                  data: {
                    $ref: '#/definitions/Article'
                  }
                }
              }
            }
          }
        })
      }
    }
  };
};
