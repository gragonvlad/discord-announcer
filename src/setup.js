'use strict';

const fs = require('fs-extra');
const LOGGER = require(__dirname + '/logger.js');

function initializeDirectory(path) {
  fs.mkdir(path)
  .then(() => {
    LOGGER.info(`Directory ${path} created`)
  })
  .catch(() => {
    LOGGER.info(`Directory ${path} already exists`);
  });
}

function initalizeSaveFile(path) {
  fs.writeFile(path, "", {flag: 'wx'})
  .then(() => {
    LOGGER.info(`File ${path} created`)
  })
  .catch(() => {
    LOGGER.info(`File ${path} already exists`);
  });
}

initializeDirectory(__dirname + '/../voice');
initializeDirectory(__dirname + '/../voice/join');
initializeDirectory(__dirname + '/../voice/leave');
initializeDirectory(__dirname + '/../logs');
initalizeSaveFile(__dirname + '/connections.json');