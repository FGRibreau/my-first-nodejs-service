'use strict';

module.exports = () => {
  const ArticleModel = require('./ArticleModel')();

  return {
    ArticleModel: ArticleModel,
    ArticleRepository: require('./ArticleRepository')(ArticleModel)
  };
};
