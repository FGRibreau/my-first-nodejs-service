'use strict';

const Boom = require('boom');

const HTTP_OK = 200;
const HTTP_CREATED = 201;

module.exports = function(ArticleRepository, ArticleModel) {
  assert(_.isPlainObject(ArticleRepository));
  assert(_.isFunction(ArticleModel));

  return {
    '{articleId}': {
      $get: function(request, reply) {
        ArticleRepository.findById(request.params.articleId, (err, article) => {
          if (err) {
            return reply(Boom.badImplementation(err));
          }

          if (!article) {
            return reply(Boom.notFound());
          }

          reply(article).code(HTTP_OK);
        });
      }
    },

    $get: function(request, reply) {
      ArticleRepository.getAll((err, articles) => {
        if (err) {
          return reply(Boom.badImplementation(err));
        }

        reply(articles).code(HTTP_OK);
      });
    },

    $post: function(request, reply) {
      ArticleRepository.create(ArticleModel.withTitle(request.payload.title), (err) => {
        if (err) {
          return reply(Boom.badImplementation(err));
        }

        reply().code(HTTP_CREATED);
      });
    }
  };
};
