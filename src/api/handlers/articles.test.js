'use strict';

describe('/articles', () => {
  let server;
  const fixtures = require('./articles.test.fixtures.json');

  beforeEach((f) => {
    getServer().done(pair => {
      assert(_.isObject(pair.server));
      server = pair.server;
      f();
    }, f);
  });

  afterEach(f => {
    server.stop({
      timeout: 60000
    }, function() {
      f();
    });
  })

  describe('GET', () => {
    it('should yield every articles', (f) => {
      when(server.inject({
        method: 'GET',
        url: '/articles'
      })).done((res) => {
        t.deepEqual(res.result, fixtures.articles);
        f();
      }, f);
    });
  });

  describe('POST', () => {
    it('should yield an error if title was not specified in payload', (f) => {
      when(server.inject({
        method: 'POST',
        url: '/articles',
        payload: {
          title: ''
        }
      })).done(res => {
        t.strictEqual(res.statusCode, 400);
        t.deepEqual(res.result, fixtures.errors.missingTitle);
        f();
      });
    });

    it('should insert a new article', (f) => {
      when(server.inject({
        method: 'POST',
        url: '/articles',
        payload: {
          title: 'hello world!'
        }
      })).then(res => {
        t.strictEqual(res.statusCode, 201);
      }).then(() => server.inject({
        method: 'GET',
        url: '/articles'
      })).done(res => {
        t.strictEqual(res.result.length, 3);
        f();
      }, f);
    });
  });

  describe('/{articleId}', () => {
    describe('GET', () => {
      it('should yield an error if no `articleId` was specified or invalid', (f) => {
        when(server.inject({
          method: 'GET',
          url: '/articles/12'
        })).done(res => {
          t.strictEqual(res.statusCode, 404);
          t.deepEqual(res.result, {"statusCode":404,"error":"Not Found"});
          f();
        });
      });

      it('should yield an article', (f) => {
        when(server.inject({
          method: 'GET',
          url: '/articles/3a9c6858-ae67-4b80-a056-43234719f515'
        })).done(res => {
          t.strictEqual(res.statusCode, 200);
          t.deepEqual(res.result, fixtures.article);
          f();
        });
      });
    });
  });
});
