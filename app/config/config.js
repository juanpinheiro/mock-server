const dbSettings = {
  db: process.env.DB || 'mock',
  user: process.env.DB_USER || 'root',
  pass: process.env.DB_PASS || 'root',
  repl: process.env.DB_REPLS || 'rs1',
  servers: (process.env.DB_SERVERS) ? process.env.DB_SERVERS.substr(1, process.env.DB_SERVERS.length - 2).split(' ') : [
    'localhost:27017'
  ],
  dbParameters: () => ({
    w: 'majority',
    wtimeout: 10000,
    j: true,
    readPreference: 'ReadPreference.SECONDARY_PREFERRED',
    native_parser: false,
    autoReconnect: true,
    poolSize: 10,
    keepAlive: 300,
    connectTimeoutMS: 30000,
    socketTimeoutMS: 30000
  })
}

const serverSettings = {
  port: process.env.PORT || 3000
}

module.exports = Object.assign({}, { dbSettings, serverSettings })
