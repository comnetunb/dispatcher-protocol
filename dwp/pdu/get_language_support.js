/*
 *
 * Copyright (c) 2017 Matheus Medeiros Sarmento
 *
 */

const factory = require('../factory');
const extend = require('util')._extend;

const validate = (data) => {
  if (data === undefined) {
    throw Object({ error: 'validation error', reason: 'no data was set' });
  }

  if (data.name === undefined) {
    throw Object({ error: 'validation error', reason: 'name field is undefined' });
  }

  if (data.command === undefined) {
    throw Object({ error: 'validation error', reason: 'command field is undefined' });
  }
};

const format = (data) => {
  validate(data);

  let pdu = {};

  if (data !== undefined) {
    pdu = extend(pdu, data);
  }

  const packet = JSON.stringify(pdu);

  return factory.encapsulate(packet, factory.Id.GET_LANGUAGE_SUPPORT);
};

module.exports = {
  validate,
  format
};
