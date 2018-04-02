const clean = require('to-no-case-g')

/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */

const toSpaceReg = /[\W_]+(.|$)/g
const toSpaceCase = string => clean(string).replace(toSpaceReg, (matches, match) => match ?  ' ' + match : '').trim()

/**
 * Export
 */

module.exports = toSpaceCase
