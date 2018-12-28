const factory = require('./dwp/factory');
const common = require('./dwp/common');
const getReport = require('./dwp/pdu/get_report');
const report = require('./dwp/pdu/report');
const performTask = require('./dwp/pdu/perform_task');
const performTaskResponse = require('./dwp/pdu/perform_task_response');
const taskResult = require('./dwp/pdu/task_result');
const terminateTask = require('./dwp/pdu/terminate_task');
const terminateTaskResponse = require('./dwp/pdu/terminate_task_response');
const performCommand = require('./dwp/pdu/perform_command');
const getLanguageSupport = require('./dwp/pdu/get_language_support');
const languageSupport = require('./dwp/pdu/language_support');
const getLanguageCommand = require('./dwp/pdu/get_language_command');
const languageCommand = require('./dwp/pdu/language_command');

module.exports = {
  factory,
  common,
  pdu: {
    getReport,
    report,
    performTask,
    performTaskResponse,
    taskResult,
    terminateTask,
    terminateTaskResponse,
    performCommand,
    getLanguageSupport,
    languageSupport,
    getLanguageCommand,
    languageCommand,
  },
};
