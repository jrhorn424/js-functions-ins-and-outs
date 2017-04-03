'use strict';

const createArray = function () {
  let result = [];

  for (let i = 0; i < arguments.length; i++) {
    result[i] = arguments[i];
  }

  return result;
};

// challenge: can you use createArray in arrayTransform?
const arrayTransform = function (array, predicate, mutator) {
  const ins = require('./ins');

  let result = [];

  for (let i = 0; i < array.length; i++) {
    result[i] = ins.transform(array[i], predicate, mutator);
  }

  return result;
};



const createPerson = function (givenName, familyName, bornOn, height, weight, eyeColor) {
  return {
    // "givenName": givenName,
    // givenName: givenName,
    givenName,
    familyName,
    bornOn,
    height,
    weight,
    eyeColor,
  };
};

const memoFactory = function (rememberMe) {
  let memo = rememberMe;

  return function () {
    return memo;
  };
};

const counterFactory = function () {
  let tick = 0;

  return function () {
    return tick++;
  };
};

module.exports = {
  createArray,
  arrayTransform,
  createPerson,
  memoFactory,
  counterFactory,
};
