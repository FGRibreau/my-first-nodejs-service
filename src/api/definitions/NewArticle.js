'use strict';

module.exports = {
  type: 'object',
  required: [
    'title'
  ],
  properties: {
    title: {
      type: 'string',
      minLength: 1
    }
  }
};
