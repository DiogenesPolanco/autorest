'use strict';

var util = require('util');

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the ArrayWrapper class.
 * @constructor
 */
function ArrayWrapper() { }

/**
 * Validate the payload against the ArrayWrapper schema
 *
 * @param {JSON} payload
 *
 */
ArrayWrapper.prototype.validate = function (payload) {
  if (!payload) {
    throw new Error('ArrayWrapper cannot be null.');
  }
  if (payload['array'] !== null && payload['array'] !== undefined && util.isArray(payload['array'])) {
    payload['array'].forEach(function(element) {
      if (element !== null && element !== undefined && typeof element !== 'string') {
        throw new Error('element must be of type string.');
      }
    });
  }

};

/**
 * Deserialize the instance to ArrayWrapper schema
 *
 * @param {JSON} instance
 *
 */
ArrayWrapper.prototype.deserialize = function (instance) {
  return instance;
};

module.exports = new ArrayWrapper();