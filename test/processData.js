const { getData, getRaw } = require('./utils');

function processData() {
  return `Process:${getData()}`;  // Corrected string interpolation
  // Processed real data
}

function processRaw() {
  return getRaw();
}

module.exports = { processData, processRaw };
