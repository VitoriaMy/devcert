'use strict';

const devcert = require('./dist/index.js');

module.exports = devcert.default || devcert;
module.exports.default = module.exports;
module.exports.certificateFor = devcert.certificateFor;
module.exports.hasCertificateFor = devcert.hasCertificateFor;
module.exports.configuredDomains = devcert.configuredDomains;
module.exports.removeDomain = devcert.removeDomain;
module.exports.uninstall = devcert.uninstall;