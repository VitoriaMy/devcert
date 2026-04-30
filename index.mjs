import devcertModule from './dist/index.js';

const devcert = devcertModule.default ?? devcertModule;

export const certificateFor = devcert.certificateFor;
export const hasCertificateFor = devcert.hasCertificateFor;
export const configuredDomains = devcert.configuredDomains;
export const removeDomain = devcert.removeDomain;
export const uninstall = devcert.uninstall;

export default devcert;