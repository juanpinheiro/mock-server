const q = require('q')

module.exports = (time) => {
  let deferred = q.defer()

  time = isNaN(time) ? 0 : time

  setTimeout(function () {
    deferred.resolve()
  }, time)

  return deferred.promise
}
