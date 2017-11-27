const MongoClient = require('mongodb')

const getMongoURL = (options) => {
  const url = options.servers
    .reduce((prev, cur) => prev + cur + ',', 'mongodb://')

  return process.env.MONGODB_URI || `${url.substr(0, url.length - 1)}/${options.db}`
}

const connect = (options, mediator) => {
  mediator.once('boot.ready', () => {
    console.log(getMongoURL(options))
    MongoClient.connect(
      getMongoURL(options), options.dbParameters(), (err, db) => {
        if (err) {
          mediator.emit('db.error', err)
        }
        mediator.emit('db.ready', db)
      })
  })
}

module.exports = Object.assign({}, {connect})
