"use strict";


class Logger {
  constructor(level){
    this.levels = ['error', 'info', 'debug'];
    this.level = level;
  }

  info (msg) {
    if(this.levels.indexOf(this.level) > 0){
      console.log(msg);
    }
  }
  debug (msg) {
    if(this.levels.indexOf(this.level) > 1){
      console.log(msg);
    }
  }
  error (msg) {
    if(this.levels.indexOf(this.level) > -1){
      console.log(msg);
    }
  }
}


module.exports = Logger;
