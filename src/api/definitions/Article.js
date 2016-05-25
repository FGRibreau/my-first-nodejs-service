'use strict';

module.exports = {
  type: 'object',
  required: [
    'id',
    'type',
    'attributes'
  ],
  properties: {
    id: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
    attributes: {
      type: 'object',
      properties: {
        title: {
          type: 'string'
        }
      }
    }
  }
};
