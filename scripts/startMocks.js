const server = require('./mocks/server')
const router = require('./mocks/router')
const responseHandlers = require('./mocks/responseHandlers')

server.start(responseHandlers.handlers, router.route)