// logger.js

// Esta es una función que se guardara en este módulo como info
export function info(message) {
    console.log('info: ${message}')
}

// Esta es una función que se guardara en este módulo como verbose
export function verbose(message) {
    console.log('verbose: ${message}')
}

/*
  const logger = require('./logger')
  logger.info('This is an informational message')
  logger.verbose('This is a verbose message')
 * */