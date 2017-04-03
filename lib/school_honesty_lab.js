'use strict'

const developer = {
  name: 'Mike',
  late: true,
  score: 100
}

const anotherDeveloper = {
  name: 'Bernard',
  late: false,
  score: 90
}

const developers = [developer, anotherDeveloper]

const deductForLate = function (developer) {
  developer.score = 0
}

const isEarly = function (number) {
  return number < 3
}

const runLateScript = function (developers, mutator, predicate) {
  for (let i = 0, max = developers.length; i < max; i++) {
    if (predicate(2) || developers[i].late === false) {
      developers[i].score = developers[i].score // no-op
    } else {
      mutator(developers[i])
    }
  }
}

runLateScript(developers, deductForLate, isEarly)

module.exports = {
  developers,
  runLateScript
}
