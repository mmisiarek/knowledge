"use strict";

let Logger = require('./logger');
let env = process.env.NODE_ENV;


module.exports = () => {
  if(env === 'development') {
    return new Logger('debug');
  } else if (env === 'production') {
    return new Logger('error');
  } else {
    return new Logger('info');
  }
}
