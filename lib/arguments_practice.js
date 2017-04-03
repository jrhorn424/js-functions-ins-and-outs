'use strict'

const max = function () {
  let result = arguments[0]

  for (let i = 1, max = arguments.length; i < max; i++) {
    const current = arguments[i]
    result = current > result ? current : result
  }

  return result
}

const maxOfArray = function (arr) {
  // see if you can do this by reusing max function and the spread
  // operator in ES2016
  let result = arr[0]

  for (let i = 1, max = arr.length; i < max; i++) {
    const current = arr[i]
    result = current > result ? current : result
  }

  return result
}

const addProperty = function (obj, prop, val) {
  // side effect
  obj[prop] = val
  // this is the main effect
  return val
  // return undefined
}

module.exports = {
  max,
  maxOfArray,
  addProperty
}
