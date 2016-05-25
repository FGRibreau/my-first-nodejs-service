'use strict';

module.exports = (domain) => {
  assert(_.isPlainObject(domain));

  return {
    articles: require('./articles')(domain.ArticleRepository, domain.ArticleModel)
  };
};
