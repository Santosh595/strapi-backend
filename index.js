"use strict";

const boostrap = require('./src/bootstrap');

module.exports = {
  async bootstrap() {
    await boostrap();
  },
}
