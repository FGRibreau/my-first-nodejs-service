'use strict';

module.exports = {
  type: 'object',
  required: [
    'id',
    'status',
    'code',
    'title'
  ],
  properties: {
    id: {
      type: 'string'
    },
    status: {
      type: 'string'
    },
    code: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    detail: {
      type: 'string'
    }
  }
};
