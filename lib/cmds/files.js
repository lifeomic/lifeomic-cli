'use strict';

const options = require('../common-yargs');

exports.command = 'files <command>';
exports.desc = 'Perform operations on files.';
exports.builder = yargs => {
  return options(yargs.commandDir('files_cmds'));
};
exports.handler = function (argv) {};
