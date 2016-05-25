'use strict';
const uuid = require('node-uuid').v4;

module.exports = () => {

  /**
   * [ArticleModel description]
   * @param {UUID} id    [description]
   * @param {[type]} title [description]
   */
  function ArticleModel(id, title) {
    this.id = id;
    this.title = title;
  }

  ArticleModel.withTitle = function(title) {
    return new ArticleModel(uuid(), title);
  };

  return ArticleModel;
};
