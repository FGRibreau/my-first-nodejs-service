'use strict';

module.exports = {
  type: 'object',
  required: ['errors'],
  properties: {
    errors: {
      type: 'array',
      items: {
        $ref: '#/definitions/Error'
      }
    }
  }
};
