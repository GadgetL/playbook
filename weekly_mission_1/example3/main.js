/*
  node main.js
*/

const logger1 = require('./loger_1')
const logger2 = require('./loger_2')

logger1('This is an informational message')
logger2.verbose('This is a verbose message')