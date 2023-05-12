const Immutable = require('immutable');

/**
 * Converts a plain JavaScript object to an Immutable Map
 * using the fromJS method of Immutable.js library
 *
 * @param {Object} object - The plain JavaScript object to be converted
 * @returns {Map} The Immutable Map representing the input object
 */
function getImmutableObject(object) {
  return Immutable.fromJS(object);
}

module.exports = getImmutableObject;
