'use strict'

const {EventEmitter} = require('events');
const server         = require('./server/server');
const config         = require('./config/');
const mediator       = new EventEmitter();

console.log('--- MOCK SERVER: NUTROR ---');
console.log('Connecting to mock server...');

process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception', err);
});

process.on('uncaughtRejection', (err, promise) => {
  console.error('Unhandled Rejection', err);
});

server.start({
  port: config.serverSettings.port
});

mediator.emit('boot.ready');
