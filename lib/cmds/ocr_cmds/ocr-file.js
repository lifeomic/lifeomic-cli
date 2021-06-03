'use strict';

const { post } = require('../../api');
const print = require('../../print');

exports.command = 'ocr-file <projectId> <subjectId> <fileId>';
exports.desc = 'Submit file to be processed for OCR and Analytics if configured by <projectId> <subjectId> <fileId>. NOTE: This will create an extra OCR specfic Document Reference.';
exports.builder = yargs => {
  yargs.positional('projectId', {
    describe: 'The ID of the project.',
    type: 'string'
  }).positional('subjectId', {
    describe: 'The subject ID.',
    type: 'string'
  }).positional('fileId', {
    describe: 'The ID of the file to OCR.',
    type: 'string'
  });
};

exports.handler = async argv => {
  const response = await post(argv, '/v1/ocr/documents', {
    project: argv.projectId,
    subject: argv.subjectId,
    fileId: argv.fileId
  });
  print(response.data, argv);
};
