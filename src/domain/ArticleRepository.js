'use strict';

module.exports = (ArticleModel) => {
  assert(_.isFunction(ArticleModel));

  // only for testing
  const db = _.cloneDeep(require('./ArticleRepository.fixtures.json'));

  return {
    /**
     * Get every articles
     * @param  {function} f(err, articles) yield an error if an error ocurred, otherwise an array (empty or not) containing ArticleModels
     */
    getAll: (f) => {
      f(null, db.map((json) => new ArticleModel(json.id, json.title)));
    },

    findById: (uuid, f) => {
      f(null, _.find(db, {
        id: uuid
      }));
    },

    create: (articleModel, f) => {
      if (!(articleModel instanceof ArticleModel)) {
        return f(new Error('Invalid articleModel'));
      }

      // simulate a serialize
      db.push(JSON.parse(JSON.stringify(articleModel)));

      f(null);
    }
  };
};
