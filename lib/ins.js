'use strict';

const product = function () {
  let result = 1;

  for (let i = 0; i < arguments.length; i++) {
    result = result * arguments[i];
  }

  return result;
};

// takes an arbitrary number of arguments (each arg
// should be a number), finds the largest one, and
// returns that member
const max = function (numberArray) {
  let result = numberArray[0];

  for (let i = 1; i < numberArray.length; i++) {
    if (result < numberArray[i]) {
      result = numberArray[i];
    }
  }

  return result;
};

// Write a function that takes an array full of integers, doubles each value,
// and returns a new array with those values.

const arrayTimes2 = function (integerArray) {
  let result = [];

  for (let i = 0; i < integerArray.length; i++) {
    result[i] = integerArray[i] * 2;
  }

  return result;
};

// this function takes an object and adds a property
// to it
const addProperty = function (obj, prop, val) {
  //obj.prop = val // is equivalent
  //obj.['prop'] = val

  obj[prop] = val;
};

// if the predicate is true, mutate the value, otherwise don't mutate it
const transform = function (value, predicate, mutator) {
  if (predicate(value)) {
    return mutator(value);
  }

  return value;
};

module.exports = {
  product,
  max,
  arrayTimes2,
  addProperty,
  transform,
};
